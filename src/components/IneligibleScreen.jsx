import React, { useState, useEffect } from 'react';
import { REWARD_BG, QUIZ_CONFIG } from '../data/quizData';
import { formatDetailedBengaliCountdown } from '../utils/formatters';
import {
  XCircleVectorIcon,
  AlertCircleVectorIcon,
  TelegramVectorIcon,
  LockVectorIcon
} from './Icons';

const TOTAL_CYCLE_MS = 36 * 60 * 60 * 1000; // 12h wait + 24h reject lock

export default function IneligibleScreen({ completedTime, onLockExpired }) {
  const getLockRemainingMs = () => {
    if (!completedTime) return 24 * 60 * 60 * 1000;
    const elapsed = Date.now() - completedTime;
    return Math.max(0, TOTAL_CYCLE_MS - elapsed);
  };

  const [lockRemainingMs, setLockRemainingMs] = useState(getLockRemainingMs);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getLockRemainingMs();
      setLockRemainingMs(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        if (onLockExpired) {
          onLockExpired();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [completedTime, onLockExpired]);

  return (
    <div
      className="phone-screen-body screen-with-bg"
      style={{ backgroundImage: `url(${REWARD_BG})` }}
    >
      {/* Top Spacer allowing background character to shine through */}
      <div className="screen-bg-top-spacer" />

      {/* Floating Card: Ineligible Offer State */}
      <div className="quiz-floating-card ineligible-floating-card">
        <div className="ineligible-badge-pill">
          <XCircleVectorIcon className="badge-vector-x" />
        </div>

        <h2 className="ineligible-heading">আপনি এই অফারের জন্য যোগ্য নন!</h2>

        <p className="ineligible-description">
          ১২ ঘণ্টার অপেক্ষা ও যাচাইকরণ সম্পন্ন হয়েছে। সিস্টেম অনুসন্ধানে দেখা গেছে আপনি এই অফারের নির্দিষ্ট শর্তাবলী পূরণ করতে পারেননি। আপনার অ্যাকাউন্টটি পরবর্তী <strong>২৪ ঘণ্টার জন্য লক</strong> থাকবে।
        </p>

        {/* Status Warning Box with 24h Lock Countdown */}
        <div className="ineligible-status-box">
          <div className="status-row">
            <span className="status-label">অফার স্ট্যাটাস:</span>
            <span className="status-badge-rejected">অযোগ্য / বাতিল</span>
          </div>
          <div className="status-row">
            <span className="status-label">যাচাইকরণ ফলাফল:</span>
            <span className="status-val-time">১২ ঘণ্টা অতিক্রান্ত</span>
          </div>
          <div className="status-row">
            <span className="status-label">লক অবস্থা:</span>
            <span className="status-badge-lock">
              <LockVectorIcon className="vector-lock-inline" />
              ২৪ ঘণ্টার জন্য লক
            </span>
          </div>
          <div className="status-row lock-countdown-row">
            <span className="status-label">আনলক হতে বাকি:</span>
            <span className="status-val-lock-countdown" id="lock-countdown-timer">
              {formatDetailedBengaliCountdown(lockRemainingMs)}
            </span>
          </div>
        </div>

        {/* Telegram CTA Button */}
        <a
          href={QUIZ_CONFIG.telegramBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-telegram-primary"
          id="telegram-channel-link"
        >
          <TelegramVectorIcon className="telegram-plane-icon" />
          <span>টেলিগ্রাম চ্যানেলে যুক্ত থাকুন</span>
        </a>

        <div className="ineligible-footer-note">
          <AlertCircleVectorIcon className="vector-alert-inline" />
          <span>২৪ ঘণ্টা পর লক উন্মুক্ত হবে। পরবর্তী অফারের জন্য চ্যানেলে নজর রাখুন।</span>
        </div>
      </div>
    </div>
  );
}

