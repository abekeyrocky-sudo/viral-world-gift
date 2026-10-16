import React, { useEffect } from 'react';
import { CloseVectorIcon, ShieldCheckVectorIcon } from './Icons';

export default function RulesModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="rules-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-modal-title"
    >
      <div
        className="rules-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="rules-modal-header">
          <div className="rules-title-group">
            <div className="rules-icon-badge">
              <ShieldCheckVectorIcon className="rules-vector-icon" />
            </div>
            <div>
              <h3 id="rules-modal-title" className="rules-modal-title">
                কুইজের নিয়মাবলী
              </h3>
              <p className="rules-modal-subtitle">
                সহজে উপহার পেতে নিয়মগুলো অনুসরণ করুন
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rules-close-btn"
            onClick={onClose}
            aria-label="বন্ধ করুন"
          >
            <CloseVectorIcon className="rules-close-svg" />
          </button>
        </div>

        {/* Rules Content */}
        <div className="rules-list-container">
          <div className="rule-item">
            <span className="rule-number-badge">১</span>
            <div className="rule-text-wrap">
              <h4 className="rule-item-title">সকল প্রশ্নের উত্তর দিন</h4>
              <p className="rule-item-desc">
                কুইজের প্রতিটি ধাপ সম্পন্ন করে সঠিক ও বাস্তবসম্মত উত্তর নির্বাচন করুন।
              </p>
            </div>
          </div>

          <div className="rule-item">
            <span className="rule-number-badge">২</span>
            <div className="rule-text-wrap">
              <h4 className="rule-item-title">টেলিগ্রাম বটে জয়েন করুন</h4>
              <p className="rule-item-desc">
                কুইজ শেষ হলে প্রদর্শিত অফিসিয়াল টেলিগ্রাম বট লিংকে যুক্ত হয়ে টাস্ক সম্পন্ন করুন।
              </p>
            </div>
          </div>

          <div className="rule-item">
            <span className="rule-number-badge">৩</span>
            <div className="rule-text-wrap">
              <h4 className="rule-item-title">ধৈর্য ধরে অপেক্ষা করুন</h4>
              <p className="rule-item-desc">
                অংশগ্রহণ যাচাই ও উপহার প্রসেসিংয়ের জন্য ৬ থেকে ১২ ঘণ্টা সময় লাগতে পারে।
              </p>
            </div>
          </div>

          <div className="rule-item">
            <span className="rule-number-badge">৪</span>
            <div className="rule-text-wrap">
              <h4 className="rule-item-title">একাধিক এন্ট্রি গ্রহণযোগ্য নয়</h4>
              <p className="rule-item-desc">
                একজন ব্যবহারকারী একবারই অংশগ্রহণ করতে পারবেন। ফেক বা স্প্যাম এন্ট্রি বাতিল হবে।
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="rules-modal-footer">
          <button
            type="button"
            className="btn-rules-confirm"
            onClick={onClose}
          >
            ঠিক আছে, বুঝেছি
          </button>
        </div>
      </div>
    </div>
  );
}
