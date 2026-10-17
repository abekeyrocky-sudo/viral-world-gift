import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_CONFIG, QUIZ_QUESTIONS, REWARD_BG } from '../data/quizData';
import { formatDetailedBengaliCountdown } from '../utils/formatters';
import {
  GiftVectorIcon,
  ClockVectorIcon,
  RefreshVectorIcon,
  TelegramVectorIcon,
  AlertCircleVectorIcon
} from './Icons';

const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;

export default function RewardScreen({ userAnswers, completedTime, onTwelveHoursExpired }) {
  const [showSummary, setShowSummary] = useState(false);
  const [showClickWarning, setShowClickWarning] = useState(false);

  const getRemainingMs = () => {
    if (!completedTime) return TWELVE_HOURS_MS;
    const elapsed = Date.now() - completedTime;
    return Math.max(0, TWELVE_HOURS_MS - elapsed);
  };

  const [remainingMs, setRemainingMs] = useState(getRemainingMs);

  useEffect(() => {
    // Fire celebration particles
    const end = Date.now() + 2 * 1000;
    const colors = ['#0088cc', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.6 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.6 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  // 12-hour real-time live countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const currentRemaining = getRemainingMs();
      setRemainingMs(currentRemaining);
      if (currentRemaining <= 0) {
        clearInterval(timer);
        if (onTwelveHoursExpired) {
          onTwelveHoursExpired();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [completedTime, onTwelveHoursExpired]);

  const handleDisabledRestartClick = (e) => {
    e.preventDefault();
    setShowClickWarning(true);
    setTimeout(() => {
      setShowClickWarning(false);
    }, 4000);
  };

  return (
    <div
      className="phone-screen-body screen-with-bg"
      style={{ backgroundImage: `url(${REWARD_BG})` }}
    >
      {/* Top Spacer allowing background character to shine through */}
      <div className="screen-bg-top-spacer" />

      {/* Floating White Card on top of the background */}
      <div className="quiz-floating-card reward-floating-card">
        <div className="reward-badge-pill">
          <GiftVectorIcon className="badge-vector-gift" />
        </div>

        <h2 className="reward-heading">টাস্ক সম্পন্ন করুন!</h2>

        <p className="reward-description">
          নিচের টেলিগ্রাম বটে জয়েন করুন এবং <strong>১২ ঘণ্টা অপেক্ষা করুন</strong>। 
          কাউন্টডাউন চলাকালীন আপনি যোগ্য বিবেচিত হলে আপনার উপহার পেয়ে যাবেন!
        </p>

        {/* Telegram CTA Button */}
        <a
          href={QUIZ_CONFIG.telegramBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-telegram-primary"
          id="telegram-join-btn"
        >
          <TelegramVectorIcon className="telegram-plane-icon" />
          <span>টেলিগ্রাম বটে জয়েন করুন</span>
        </a>

        {/* 12-Hour Live Countdown Timer */}
        <div className="reward-wait-time reward-countdown-bar">
          <ClockVectorIcon className="vector-clock-inline countdown-clock-icon" />
          <span className="countdown-prefix">অপেক্ষার বাকি সময়:</span>
          <span className="countdown-time-badge" id="twelve-hour-countdown">
            {formatDetailedBengaliCountdown(remainingMs)}
          </span>
        </div>

        {/* Answers Review & Inactive Restart Section */}
        <div className="reward-extra-actions">
          <button
            type="button"
            className="btn-text-toggle"
            onClick={() => setShowSummary(!showSummary)}
          >
            {showSummary ? '▲ উত্তরসমূহ লুকান' : '▼ আপনার দেওয়া উত্তরসমূহ দেখুন'}
          </button>

          {showSummary && (
            <div className="answers-review-drawer">
              {QUIZ_QUESTIONS.map((q, idx) => (
                <div key={q.id} className="review-answer-row">
                  <span className="review-q-title">{idx + 1}. {q.question}</span>
                  <span className="review-q-val">{userAnswers[idx] || 'উত্তর দেওয়া হয়নি'}</span>
                </div>
              ))}
            </div>
          )}

          {/* This button is disabled/inactive - clicking does NOT work or restart */}
          <button
            type="button"
            className="btn-restart-action btn-restart-disabled"
            onClick={handleDisabledRestartClick}
            aria-disabled="true"
          >
            <RefreshVectorIcon className="vector-refresh-inline" />
            <span>আবার কুইজ খেলুন</span>
          </button>

          {showClickWarning && (
            <div className="restart-warning-toast" role="alert">
              <AlertCircleVectorIcon className="vector-alert-sm" />
              <span>আপনি ইতিমধ্যে কুইজ সম্পন্ন করেছেন! ১২ ঘণ্টার কাউন্টডাউন শেষ হওয়া পর্যন্ত অপেক্ষা করুন।</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
