import React from 'react';
import { toBengaliDigits } from '../utils/formatters';
import {
  GraduationCapIcon,
  BriefcaseIcon,
  BusinessIcon,
  CricketIcon,
  FootballIcon,
  GamepadIcon,
  YoungUserIcon,
  YouthUserIcon,
  AdultUserIcon
} from './Icons';

export default function QuizCard({
  questionData,
  currentStep,
  totalSteps,
  selectedAnswer,
  onSelectOption,
  onPrevStep,
  onNextStep
}) {
  const isFirstStep = currentStep === 0;
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  const renderOptionIcon = (iconType) => {
    switch (iconType) {
      case 'student': return <GraduationCapIcon />;
      case 'job': return <BriefcaseIcon />;
      case 'business': return <BusinessIcon />;
      case 'cricket': return <CricketIcon />;
      case 'football': return <FootballIcon />;
      case 'other': return <GamepadIcon />;
      case 'young': return <YoungUserIcon />;
      case 'youth': return <YouthUserIcon />;
      case 'adult': return <AdultUserIcon />;
      default: return null;
    }
  };

  return (
    <div
      className="phone-screen-body screen-with-bg"
      style={{ backgroundImage: `url(${questionData.bgImage})` }}
    >
      {/* Top Spacer allowing background character to shine through */}
      <div className="screen-bg-top-spacer" />

      {/* Floating White Card on top of the background */}
      <div className="quiz-floating-card">
        {/* Progress Bar & Step Tracker */}
        <div className="screen-progress-wrap">
          <div className="progress-bar-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="step-counter-text">
            প্রশ্ন {toBengaliDigits(currentStep + 1)} / {toBengaliDigits(totalSteps)}
          </div>
        </div>

        {/* Question Title */}
        <h2 className="sheet-question-title">{questionData.question}</h2>

        {/* Options List */}
        <div className="sheet-options-list">
          {questionData.options.map((optionObj) => {
            const isSelected = selectedAnswer === optionObj.text;
            const specialClass = optionObj.specialStyle ? optionObj.specialStyle : '';
            const vectorIcon = renderOptionIcon(optionObj.iconType);

            return (
              <button
                key={optionObj.text}
                type="button"
                className={`sheet-option-btn ${specialClass} ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectOption(optionObj.text)}
              >
                {vectorIcon && (
                  <span className="option-leading-icon" aria-hidden="true">
                    {vectorIcon}
                  </span>
                )}
                <span className="option-label-text">{optionObj.text}</span>
                <span className="option-check-circle" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Floating Navigation Buttons */}
      <div className="screen-floating-nav">
        <button
          type="button"
          className="btn-nav-prev"
          onClick={onPrevStep}
          disabled={isFirstStep}
          aria-label="আগের প্রশ্ন"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>

        <button
          type="button"
          className="btn-nav-next"
          onClick={onNextStep}
          disabled={!selectedAnswer}
        >
          <span>{currentStep === totalSteps - 1 ? 'সম্পন্ন করুন' : 'পরবর্তী'}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
