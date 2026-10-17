import React, { useState, useEffect } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import QuizCard from './components/QuizCard';
import RewardScreen from './components/RewardScreen';
import IneligibleScreen from './components/IneligibleScreen';
import RulesModal from './components/RulesModal';
import { InfoVectorIcon } from './components/Icons';
import { QUIZ_QUESTIONS } from './data/quizData';
import './App.css';

const STORAGE_KEY_COMPLETED_TIME = 'viral_world_quiz_completed_at';
const STORAGE_KEY_ANSWERS = 'viral_world_quiz_user_answers';

const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000; // 12 hours countdown phase
const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000; // 24 hours reject lock phase
const TOTAL_CYCLE_MS = TWELVE_HOURS_MS + TWENTY_FOUR_HOURS_MS; // 36 hours total cycle

function App() {
  const [appState, setAppState] = useState('loading'); // 'quiz' | 'reward' | 'ineligible' | 'loading'
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [completedTime, setCompletedTime] = useState(null);
  const [showRules, setShowRules] = useState(false);

  // Check localStorage status on initial load
  useEffect(() => {
    const savedCompletedTime = localStorage.getItem(STORAGE_KEY_COMPLETED_TIME);
    const savedAnswers = localStorage.getItem(STORAGE_KEY_ANSWERS);

    if (savedAnswers) {
      try {
        setUserAnswers(JSON.parse(savedAnswers));
      } catch (err) {
        console.error('Failed to parse saved answers:', err);
      }
    }

    if (savedCompletedTime) {
      const completedTimestamp = parseInt(savedCompletedTime, 10);
      setCompletedTime(completedTimestamp);
      const elapsed = Date.now() - completedTimestamp;

      if (elapsed < TWELVE_HOURS_MS) {
        // Phase 1: Completed within 12 hours -> Reward Page with live 12h countdown
        setAppState('reward');
      } else if (elapsed < TOTAL_CYCLE_MS) {
        // Phase 2: 12 to 36 hours (24 hours locked on reject page)
        setAppState('ineligible');
      } else {
        // Phase 3: 24h reject lockout expired! Reset state and return to fresh quiz
        localStorage.removeItem(STORAGE_KEY_COMPLETED_TIME);
        localStorage.removeItem(STORAGE_KEY_ANSWERS);
        setCompletedTime(null);
        setAppState('quiz');
      }
    } else {
      // First time / Not completed yet -> Quiz Mode
      setAppState('quiz');
    }

    // Developer testing helpers on window
    // 1. Test 12-hour countdown ending soon (default: 10 seconds remaining)
    window.__test12HoursCountdown = (secondsRemaining = 10) => {
      const simulatedTime = Date.now() - (TWELVE_HOURS_MS - secondsRemaining * 1000);
      localStorage.setItem(STORAGE_KEY_COMPLETED_TIME, simulatedTime.toString());
      window.location.reload();
    };

    // 2. Test 24-hour reject lock ending soon (default: 10 seconds remaining)
    window.__testRejectLockCountdown = (secondsRemaining = 10) => {
      const simulatedTime = Date.now() - (TOTAL_CYCLE_MS - secondsRemaining * 1000);
      localStorage.setItem(STORAGE_KEY_COMPLETED_TIME, simulatedTime.toString());
      window.location.reload();
    };

    // 3. Jump immediately to reject lock state
    window.__simulate12HoursExpired = () => {
      const simulatedTime = Date.now() - (TWELVE_HOURS_MS + 2000);
      localStorage.setItem(STORAGE_KEY_COMPLETED_TIME, simulatedTime.toString());
      window.location.reload();
    };

    // 4. Reset everything
    window.__resetQuizState = () => {
      localStorage.removeItem(STORAGE_KEY_COMPLETED_TIME);
      localStorage.removeItem(STORAGE_KEY_ANSWERS);
      window.location.reload();
    };
  }, []);

  // হ্যান্ডেল অপশন নির্বাচন
  const handleSelectOption = (optionText) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentStep]: optionText
    }));
  };

  // পরবর্তী পেজ অথবা সমাপ্তি
  const handleNextStep = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // কাজ শেষ হলে লোকাল স্টোরেজে সমাপ্তির সময় সংরক্ষণ
      const now = Date.now();
      localStorage.setItem(STORAGE_KEY_COMPLETED_TIME, now.toString());
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(userAnswers));
      setCompletedTime(now);
      setAppState('reward');
    }
  };

  // পূর্ববর্তী পেজ
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // ১২ ঘণ্টা শেষ হলে রিজেক্ট/লক পেজে স্থানান্তর
  const handleTwelveHoursExpired = () => {
    setAppState('ineligible');
  };

  // ২৪ ঘণ্টা রিজেক্ট লক শেষ হলে পুনরায় কুইজে ফিরে যাওয়া
  const handleLockExpired = () => {
    localStorage.removeItem(STORAGE_KEY_COMPLETED_TIME);
    localStorage.removeItem(STORAGE_KEY_ANSWERS);
    setCompletedTime(null);
    setCurrentStep(0);
    setUserAnswers({});
    setAppState('quiz');
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep] || QUIZ_QUESTIONS[0];
  const selectedAnswer = userAnswers[currentStep] || null;

  return (
    <div className="webapp-root">
      <BackgroundEffects />

      {/* Main Web App Card */}
      <main className="webapp-container" role="main">
        {/* Persistent Info Button visible on all screens (top-right) */}
        <button
          type="button"
          className="app-info-btn"
          onClick={() => setShowRules(true)}
          aria-label="কুইজের নিয়মাবলী"
          title="কুইজের নিয়মাবলী দেখুন"
        >
          <InfoVectorIcon className="info-icon-svg" />
        </button>

        {appState === 'loading' ? null : appState === 'ineligible' ? (
          /* 12 hours expired -> Locked on Ineligible Page for 24 hours */
          <IneligibleScreen
            completedTime={completedTime}
            onLockExpired={handleLockExpired}
          />
        ) : appState === 'reward' ? (
          /* Waiting within 12 hours -> Reward Page with live 12h countdown */
          <RewardScreen
            userAnswers={userAnswers}
            completedTime={completedTime}
            onTwelveHoursExpired={handleTwelveHoursExpired}
          />
        ) : (
          /* Active Quiz Steps */
          <QuizCard
            questionData={currentQuestion}
            currentStep={currentStep}
            totalSteps={QUIZ_QUESTIONS.length}
            selectedAnswer={selectedAnswer}
            onSelectOption={handleSelectOption}
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
          />
        )}
      </main>

      {/* Rules Modal */}
      <RulesModal
        isOpen={showRules}
        onClose={() => setShowRules(false)}
      />
    </div>
  );
}

export default App;
