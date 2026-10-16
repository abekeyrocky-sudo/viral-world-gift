import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import QuizCard from './components/QuizCard';
import RewardScreen from './components/RewardScreen';
import RulesModal from './components/RulesModal';
import { InfoVectorIcon } from './components/Icons';
import { QUIZ_QUESTIONS } from './data/quizData';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // হ্যান্ডেল অপশন নির্বাচন
  const handleSelectOption = (optionText) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentStep]: optionText
    }));
  };

  // পরবর্তী পেজ
  const handleNextStep = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  // পূর্ববর্তী পেজ
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // কুইজ পুনরায় শুরু
  const handleRestart = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setIsCompleted(false);
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

        {!isCompleted ? (
          <QuizCard
            questionData={currentQuestion}
            currentStep={currentStep}
            totalSteps={QUIZ_QUESTIONS.length}
            selectedAnswer={selectedAnswer}
            onSelectOption={handleSelectOption}
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
          />
        ) : (
          <RewardScreen
            userAnswers={userAnswers}
            onRestart={handleRestart}
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
