import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_CONFIG, QUIZ_QUESTIONS, REWARD_BG } from '../data/quizData';
import {
  GiftVectorIcon,
  ClockVectorIcon,
  RefreshVectorIcon,
  TelegramVectorIcon
} from './Icons';

export default function RewardScreen({ userAnswers, onRestart }) {
  const [showSummary, setShowSummary] = useState(false);

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
          নিচের টেলিগ্রাম বটে জয়েন করুন এবং <strong>{QUIZ_CONFIG.estimatedWaitTime} অপেক্ষা করুন</strong>। 
          আপনি যোগ্য বিবেচিত হলে আপনার উপহার পেয়ে যাবেন!
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

        {/* Wait Time Info */}
        <div className="reward-wait-time">
          <ClockVectorIcon className="vector-clock-inline" />
          <span>অপেক্ষার সময়: {QUIZ_CONFIG.estimatedWaitTime}</span>
        </div>

        {/* Answers Review & Restart Section */}
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

          <button
            type="button"
            className="btn-restart-action"
            onClick={onRestart}
          >
            <RefreshVectorIcon className="vector-refresh-inline" />
            <span>আবার কুইজ খেলুন</span>
          </button>
        </div>
      </div>
    </div>
  );
}
