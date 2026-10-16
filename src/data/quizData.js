import screen1Img from '../assets/screen1-img.jpg';
import screen2Img from '../assets/screen2-img.jpg';
import screen3Img from '../assets/screen3-img.jpg';
import screen4Img from '../assets/screen4-img.jpg';
import screen5Img from '../assets/screen5-img.jpg';

export const REWARD_BG = screen5Img;

export const QUIZ_CONFIG = {
  title: "Viral World",
  subtitle: "খেলুন প্রশ্নের, জিতে নিন পুরস্কার!",
  telegramBotUrl: "https://t.me/AppleFarmOfficialBot/App",
  channelName: "Viral World",
  estimatedWaitTime: "৬ - ১২ ঘণ্টা"
};

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "আপনি কি Viral World টেলিগ্রাম চ্যানেলের পক্ষ থেকে উপহার পেতে চান?",
    bgImage: screen1Img,
    options: [
      { text: "হ্যাঁ", specialStyle: "btn-yes-green" },
      { text: "না", specialStyle: "btn-no-light" }
    ]
  },
  {
    id: 2,
    question: "আপনি বর্তমানে কি করছেন?",
    bgImage: screen2Img,
    options: [
      { text: "ছাত্র / ছাত্রী", iconType: "student" },
      { text: "চাকরিজীবী", iconType: "job" },
      { text: "ব্যবসায়ী", iconType: "business" }
    ]
  },
  {
    id: 3,
    question: "আপনার প্রিয় খেলা কোনটি?",
    bgImage: screen3Img,
    options: [
      { text: "ক্রিকেট", iconType: "cricket" },
      { text: "ফুটবল", iconType: "football" },
      { text: "অন্যান্য", iconType: "other" }
    ]
  },
  {
    id: 4,
    question: "আপনার বয়স কত?",
    bgImage: screen4Img,
    options: [
      { text: "১৮ এর কম", iconType: "young" },
      { text: "১৮ - ২৫ বছর", iconType: "youth" },
      { text: "২৫ এর বেশি", iconType: "adult" }
    ]
  }
];
