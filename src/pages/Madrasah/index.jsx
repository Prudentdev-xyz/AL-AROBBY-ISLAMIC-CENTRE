import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  ArrowRight,
  MessageCircle,
  Send,
  Video,
  Play,
} from "lucide-react";
import { courses } from "../../data/courses";

const platforms = [
  {
    icon: Video,
    label: "Zoom",
    desc: "Live one-on-one and group classes conducted via Zoom with direct teacher interaction and real-time feedback on your recitation.",
    color: "text-emerald",
    border: "hover:border-emerald",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    desc: "Our primary channel for student support, class scheduling, and direct communication between students and teachers.",
    color: "text-gold",
    border: "hover:border-gold",
  },
  {
    icon: Send,
    label: "Telegram",
    desc: "Join our Telegram community for class updates, Islamic reminders, and announcements from the Academy.",
    color: "text-emerald",
    border: "hover:border-emerald",
  },
  {
    icon: Play,
    label: "TikTok",
    desc: "Follow our TikTok page for Islamic learning content, class highlights, and academy updates from our teachers.",
    color: "text-gold",
    border: "hover:border-gold",
  },
];

const testimonials = [
  {
    quote:
      "Before joining Al Arobby Academy, I could barely read the Quran with correct Tajweed. My teacher was patient with me every step of the way, and within a few months I was reciting with confidence I never thought I'd have.",
    name: "Aisha, Quran Reading Student",
  },
  {
    quote:
      "I started Hifz with the Academy two years ago and I've now memorized over ten chapters. The structured revision schedule keeps me consistent even when life gets busy.",
    name: "Yusuf, Hifz Student",
  },
  {
    quote:
      "What I love most is how the Islamic Studies classes connect what we learn straight to daily life. I don't just know more about my deen, I actually live it differently now.",
    name: "Maryam, Islamic Studies Student",
  },
  {
    quote:
      "As a working adult, I never thought I'd have time to learn Quran properly. The flexible online classes let me study after work, and my teacher never made me feel behind.",
    name: "Ibrahim, Adult Learner",
  },
];

const faqs = [
  {
    question: "Who can enroll?",
    answer:
      "Anyone with a sincere desire to learn, regardless of age, background, or location. From young children just starting their Quran journey to adults seeking to deepen their faith, our doors are open to everyone.",
  },
  {
    question: "Is the academy online?",
    answer:
      "Yes, completely. All classes are conducted online through live, interactive sessions, so you can learn from the comfort of your home while staying fully connected to your teacher and classmates.",
  },
  {
    question: "Do I need prior knowledge?",
    answer:
      "Not at all. Whether you've never read a single Arabic letter or you're already memorizing the Quran, our courses are structured to meet you exactly where you are and grow with you from there.",
  },
  {
    question: "How are classes conducted?",
    answer:
      "Through live online sessions with real-time, one-on-one teacher interaction, not pre-recorded videos. You'll get instant feedback on your recitation, ask questions in the moment, and build a genuine relationship with your instructor.",
  },
  {
    question: "Are certificates available?",
    answer:
      "Yes. Upon successfully completing select programmes, you'll receive a certificate recognizing your progress and achievement, a meaningful milestone in your Islamic learning journey.",
  },
];

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      className="
        flex flex-col items-start justify-center
        h-[50vh] md:h-[60vh]
        px-6 md:px-16
        bg-forest
      "
    >
      <div className="max-w-3xl mx-auto text-center font-bold md:font-semibold leading-tight">
        <h1 className="text-4xl md:text-8xl font-display text-white">
          Al Arobby Academy
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg font-body text-champagne text-center mx-auto">
          Authentic Quranic and Islamic education, made accessible to students
          around the world through online learning.
        </p>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">
            Vision Statement
          </h2>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            To become a leading online Islamic academy that empowers students
            with authentic Quranic knowledge, Islamic values, and spiritual
            excellence.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-display text-forest">
            Mission Statement
          </h2>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            To provide accessible, high-quality online Quran and Islamic
            education that helps students strengthen their faith, improve their
            understanding of Islam, and develop righteous character.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          {/* <h2 className="text-3xl font-display text-forest mb-6">
            About the Madrasah
          </h2> */}
          <p className="text-base font-body leading-relaxed text-charcoal mb-5">
            Al Arobby Academy for Quran & Islamic Studies was established to
            make authentic Islamic education accessible to students around the
            world through online learning. The academy is dedicated to teaching
            the Holy Quran, Islamic studies, and moral values in a way that
            nurtures knowledge, faith, and good character.
          </p>
          <p className="text-base font-body leading-relaxed text-charcoal mb-5">
            Through qualified instructors and modern online platforms, students
            can learn from the comfort of their homes while remaining connected
            to Islamic teachings. Our goal is to provide flexible and effective
            learning opportunities that help students deepen their understanding
            of Islam and apply its teachings in their daily lives.
          </p>
          <p className="text-base font-body leading-relaxed text-charcoal">
            Whether you are a complete beginner or seeking to advance your
            knowledge, the Academy welcomes children, youth, and adults from
            anywhere in the world, guided by sincerity, excellence, and a
            genuine commitment to serving the Ummah.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function CoursesGrid() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">
          Courses & Programmes
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {courses.map((course, index) => (
          <FadeIn key={course.slug} delay={0.1 * index}>
            <Link
              to={`/madrasah/courses/${course.slug}`}
              className="
                group flex flex-col
                border border-stroke
                hover:border-emerald
                transition-colors duration-300
                overflow-hidden h-full
              "
            >
              {/* Image */}
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-forest/10 flex items-center justify-center">
                  <BookOpen size={32} className="text-forest/30" />
                </div>
              )}

              {/* Text */}
              <div className="flex flex-col gap-4 p-8 flex-1">
                <h3 className="text-xl font-display text-forest">
                  {course.title}
                </h3>
                <p className="text-sm font-body text-charcoal">
                  {course.overview}
                </p>
                <span
                  className="
                    flex items-center gap-2
                    mt-auto
                    text-sm font-body text-emerald
                    group-hover:text-gold
                    transition-colors duration-300
                  "
                >
                  View Course
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest mb-3">
            Where we teach
          </h2>
          <p className="max-w-2xl text-base font-body text-charcoal mb-12">
            All classes are conducted online through trusted platforms, making
            it easy to join from anywhere in the world, at a time that works for
            you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <FadeIn key={platform.label} delay={0.08 * index}>
                <div
                  className={`
                    flex flex-col gap-4 p-6 h-full
                    bg-white border border-stroke
                    transition-colors duration-300
                    ${platform.border}
                  `}
                >
                  <Icon size={28} className={platform.color} />
                  <p className="text-base font-display text-forest">
                    {platform.label}
                  </p>
                  <p className="text-sm font-body text-charcoal leading-relaxed">
                    {platform.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 py-20 bg-forest">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-white">
            Student Success Stories
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {testimonials.map((item, index) => (
            <FadeIn key={item.quote} delay={0.1 * index}>
              <div className="p-8 border-1 border-gold bg-white/5 h-full">
                <p className="text-base font-body leading-relaxed text-champagne">
                  {item.quote}
                </p>
                <p className="mt-4 text-sm font-body text-gold">{item.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-stroke">
      <button
        type="button"
        onClick={onToggle}
        className="
          flex w-full
          items-center justify-between
          py-6
          text-left
        "
      >
        <span className="text-base font-display text-forest">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`text-emerald transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm font-body leading-relaxed text-charcoal">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">
          Frequently Asked Questions
        </h2>
      </FadeIn>

      <div className="mt-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

export default function Madrasah() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <CoursesGrid />
      <Platforms />
      <Testimonials />
      <FAQ />
    </>
  );
}
