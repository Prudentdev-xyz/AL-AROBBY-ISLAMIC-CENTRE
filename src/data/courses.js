import quranReading from "../assets/quran-reading.jpg"
import quranMemorization from "../assets/quran-memorization.jpg"
import islamicStudies from "../assets/islamic-studies.jpg"

export const courses = [
  {
    slug: 'quran-reading',
    title: "Quran Reading (Qa'idah & Tajweed)",
    overview: 'Master the foundations of Quranic recitation, from the Arabic alphabet to advanced Tajweed rules, guided by qualified instructors at your own pace.',
    description: 'This course is designed for students who want to read the Quran with confidence, clarity, and correct pronunciation. Starting from Qa\'idah for absolute beginners, students progress through the rules of Tajweed, learning how each letter and sound should be properly articulated according to classical Quranic recitation standards. Whether you are reading for the first time or refining years of practice, this programme builds a solid foundation for lifelong recitation.',
    outcomes: [
      'Read the Quran fluently and with confidence',
      'Apply Tajweed rules correctly in every recitation',
      'Improve pronunciation of Arabic letters and sounds',
      'Develop a consistent, correct recitation rhythm (Tarteel)',
    ],
    whoItsFor: 'Absolute beginners with no prior Arabic knowledge, as well as students looking to correct and refine their existing recitation.',
    image: quranReading,
  },
  {
    slug: 'quran-memorization',
    title: 'Quran Memorization (Hifz)',
    overview: 'A structured, disciplined memorization programme built around proven retention methods, helping students memorize the Quran chapter by chapter with lasting accuracy.',
    description: 'Our Hifz programme is built on consistency and structured revision rather than rushed memorization. Each student follows a personalized memorization plan, reviewing previously learned portions regularly (Murajah) to ensure long-term retention. Teachers track progress closely, correcting recitation errors as they arise, so that what is memorized is memorized correctly and retained for life.',
    outcomes: [
      'Memorize selected chapters or the entire Holy Quran',
      'Strengthen long-term retention through structured revision',
      'Build daily memorization habits and discipline',
      'Receive ongoing correction to memorize with accuracy',
    ],
    whoItsFor: 'Students who have completed basic Quran reading and are ready to commit to a structured memorization journey, whether for a few chapters or the entire Quran.',
    image: quranMemorization,
  },
  {
    slug: 'islamic-studies',
    title: 'Islamic Studies',
    overview: 'A comprehensive curriculum covering Aqeedah, Fiqh, Hadith, and Seerah, designed to deepen understanding of Islam and translate knowledge into daily practice.',
    description: 'This course goes beyond memorized facts, helping students genuinely understand the foundations of their faith. Lessons in Aqeedah build a firm belief system, Fiqh teaches the practical rulings of worship and daily life, Hadith introduces the sayings and traditions of the Prophet ﷺ, and Seerah brings his life story to light as a living example. Islamic manners (Akhlaq) are woven throughout, so that knowledge is not just learned, but lived.',
    outcomes: [
      'Develop a clear and correct understanding of Islamic beliefs (Aqeedah)',
      'Learn practical Fiqh rulings for worship and daily life',
      'Study authentic Hadith and the life of the Prophet ﷺ (Seerah)',
      'Apply Islamic values and manners in everyday situations',
    ],
    whoItsFor: 'Students of all backgrounds seeking a well-rounded Islamic education, from those new to the deen to those looking to deepen existing knowledge.',
    image: islamicStudies,
  },
]

export const sharedCourseInfo = {
  duration: 'Fully flexible. Each student follows a personalized learning plan paced according to their availability, goals, and current level, with no fixed deadlines.',
  admissionRequirements: [
    'Open to children, youth, and adults of all backgrounds',
    'Access to a smartphone, tablet, or computer',
    'A stable internet connection',
    'A genuine willingness to learn, no prior knowledge required',
  ],
  tuitionFees: 'Tuition fees vary by programme and are available upon request. Reach out to our team for current pricing and available payment plans.',
  instructorInfo: 'All classes are taught by qualified, experienced Islamic teachers dedicated to authentic Quranic and Islamic education, providing direct, one-on-one guidance throughout your learning journey.',
}