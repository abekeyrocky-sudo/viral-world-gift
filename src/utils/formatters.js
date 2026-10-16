// ইংরেজি সংখ্যা বাংলায় রূপান্তর
export const toBengaliDigits = (num) => {
  const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, (digit) => bengaliNumerals[digit]);
};
