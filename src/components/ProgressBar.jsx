import React from 'react';
import { toBengaliDigits } from '../utils/formatters';

export default function ProgressBar({ currentStep, totalSteps }) {
  const progressPercent = Math.min(Math.round(((currentStep) / totalSteps) * 100), 100);

  return (
    <div className="progress-section" aria-label="কুইজ প্রোগ্রেস">
      <div className="progress-meta">
        <span className="step-indicator" id="step-indicator">
          প্রশ্ন <span className="step-num">{toBengaliDigits(currentStep + 1)}</span> / {toBengaliDigits(totalSteps)}
        </span>
        <span className="progress-percent-text">
          {toBengaliDigits(progressPercent)}% সম্পন্ন
        </span>
      </div>

      <div className="progress-bar-track">
        <div
          className="progress-fill"
          id="progress-fill"
          style={{ width: `${progressPercent}%` }}
        >
          <span className="progress-glow" />
        </div>
      </div>
    </div>
  );
}
