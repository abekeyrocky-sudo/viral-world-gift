// ইংরেজি সংখ্যা বাংলায় রূপান্তর
export const toBengaliDigits = (num) => {
  const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (digit) => bengaliNumerals[digit]);
};

// প্যাডিং হেল্পার (05, 09 ইত্যাদি)
export const padZero = (n) => String(n).padStart(2, '0');

// মিলিসেকেন্ড থেকে ঘণ্টা, মিনিট, সেকেন্ড অবজেক্ট
export const parseRemainingTime = (ms) => {
  if (!ms || ms <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds, totalMs: ms };
};

// বিস্তারিত বাংলা কাউন্টডাউন ফরম্যাটার (যেমন: "১১ ঘণ্টা ৫৯ মি. ৩২ সে.")
export const formatDetailedBengaliCountdown = (ms) => {
  const { hours, minutes, seconds } = parseRemainingTime(ms);
  const bH = toBengaliDigits(padZero(hours));
  const bM = toBengaliDigits(padZero(minutes));
  const bS = toBengaliDigits(padZero(seconds));
  return `${bH} ঘণ্টা ${bM} মি. ${bS} সে.`;
};

// ডিজিটাল ঘড়ি স্টাইল ফরম্যাটার (যেমন: "১১:৫৯:৩২")
export const formatDigitalBengaliClock = (ms) => {
  const { hours, minutes, seconds } = parseRemainingTime(ms);
  const bH = toBengaliDigits(padZero(hours));
  const bM = toBengaliDigits(padZero(minutes));
  const bS = toBengaliDigits(padZero(seconds));
  return `${bH}:${bM}:${bS}`;
};

