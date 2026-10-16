import React from 'react';

// গ্র্যাজুয়েশন ক্যাপ (ছাত্র / ছাত্রী)
export function GraduationCapIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

// ব্রিফকেস (চাকরিজীবী)
export function BriefcaseIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

// বিজনেস / ইউজার (ব্যবসায়ী)
export function BusinessIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M12 11v3" />
      <path d="M10 14h4" />
    </svg>
  );
}

// ক্রিকেট ব্যাট ও বল (ক্রিকেট)
export function CricketIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5l10-10a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8l-10 10a2 2 0 0 1-2.8 0l-1.2-1.2a2 2 0 0 1 0-2.8z" />
      <path d="M17.5 7.5L20 5l-2-2-2.5 2.5" />
      <circle cx="19" cy="19" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ফুটবল (ফুটবল)
export function FootballIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="12 8 8 11 9 15 15 15 16 11 12 8" fill="currentColor" opacity="0.3" />
      <path d="M12 2v6" />
      <path d="M22 12h-6" />
      <path d="M12 22v-7" />
      <path d="M2 12h6" />
      <path d="M4.9 4.9l4.1 3.1" />
      <path d="M19.1 4.9l-4.1 3.1" />
      <path d="M19.1 19.1l-4.1-4.1" />
      <path d="M4.9 19.1l4.1-4.1" />
    </svg>
  );
}

// গেমপ্যাড (অন্যান্য)
export function GamepadIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="15" y1="13" x2="15.01" y2="13" />
      <line x1="18" y1="11" x2="18.01" y2="11" />
      <rect x="2" y="6" width="20" height="12" rx="6" />
    </svg>
  );
}

// ইউজার জুনিয়র (১৮ এর কম)
export function YoungUserIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
      <path d="M10 8h.01M14 8h.01" />
    </svg>
  );
}

// ইউজার ইয়ুথ (১৮ - ২৫ বছর)
export function YouthUserIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ইউজার অ্যাডাল্ট (২৫ এর বেশি)
export function AdultUserIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-2a7 7 0 0 1 14 0v2" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

// গিফট বক্স ভেক্টর
export function GiftVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" rx="1" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

// ঘড়ি / ক্লক ভেক্টর
export function ClockVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// রিলোড / রিস্টার্ট ভেক্টর
export function RefreshVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

// টেলিগ্রাম প্লেন ভেক্টর
export function TelegramVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.73-.53.36-1.02.54-1.45.53-.48-.01-1.4-.27-2.09-.49-.84-.27-1.51-.42-1.45-.89.03-.25.38-.5 1.07-.77 4.19-1.82 6.99-3.02 8.4-3.6 4-.1.67 4.83.69 5.01.69.04 0 .14-.01.2-.04.06-.03.1-.08.12-.13.03-.07.04-.18.02-.29z" />
    </svg>
  );
}

// ট্রফি ভেক্টর
export function TrophyVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2" />
      <path d="M18 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
      <path d="M6 2v7a6 6 0 0 0 12 0V2H6z" />
    </svg>
  );
}

// গোল্ড কয়েন ভেক্টর
export function CoinVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10" />
      <path d="M15 9.5a2.5 2.5 0 0 0-5 0c0 3 5 2 5 5a2.5 2.5 0 0 1-5 0" />
    </svg>
  );
}

// ইনফো (Info 'i') ভেক্টর
export function InfoVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="3" />
    </svg>
  );
}

// ক্রস / ক্লোজ (Close '×') ভেক্টর
export function CloseVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// শিল্ড রুলস ভেক্টর
export function ShieldCheckVectorIcon({ className = "vector-icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
