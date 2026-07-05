import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  Users,
  Heart,
  GraduationCap,
  Globe,
  ArrowRight,
} from "lucide-react";
import heroOne from "../assets/centre.jpg";
import heroTwo from "../assets/charity.jpg";
import heroThree from "../assets/Madrasah.jpg";
import madrasahThumb from "../assets/Madrasah-logo.jpeg";
import foundationThumb from "../assets/charity-logo.jpeg";

const slides = [
  {
    id: "islamic-centre",
    headline: "Al Arobby Islamic Centre",
    subtext:
      "A home for authentic Quranic education, prayer, and humanitarian service.",
    image: heroOne,
    blurb:
      "Founded by Sheikh Muhammad Abdullah Adesina, Al Arobby serves Muslims across the globe through knowledge, worship, and compassion, rooted in the teachings of the Quran and Sunnah.",
  },
  {
    id: "madrasah",
    headline: "Al Arobby Academy",
    subtext:
      "Online Quran and Islamic Studies for children, youth, and adults.",
    image: heroThree,
    blurb:
      "Learn Tajweed, Hifz, and Islamic Studies from qualified instructors, from the comfort of your home. No prior knowledge needed. Open to all ages, anywhere in the world.",
  },
  {
    id: "charity",
    headline: "Al Arobby Foundation",
    subtext:
      "Serving humanity through charity, compassion, and community support.",
    image: heroTwo,
    blurb:
      "From Ramadan feeding programmes to our ongoing mosque development project, the Foundation works to uplift the less privileged and strengthen communities through faith-based care.",
  },
];

const coreValues = [
  {
    icon: Heart,
    label: "Sincerity (Ikhlas)",
    desc: "Everything we do is for the sake of Allah alone.",
  },
  {
    icon: GraduationCap,
    label: "Excellence in Learning",
    desc: "We hold our education to the highest standard of quality.",
  },
  {
    icon: Users,
    label: "Service to the Ummah",
    desc: "Giving back to the Muslim community is central to our mission.",
  },
  {
    icon: Globe,
    label: "Lifelong Learning",
    desc: "Knowledge is a journey we support students at every stage.",
  },
];

function HeroSlide({ slide }) {
  return (
    <div className="absolute inset-0 bg-forest">
      {/* Image bleeds from left, fades into forest green on the right */}
      <img
        src={slide.image}
        className="absolute inset-0 w-full h-full object-cover"
        alt={slide.headline}
      />

      {/* Gradient: transparent on left, solid forest on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/30 via-forest/60 to-forest" />

      {/* Bottom fade for clean text area */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />

      {/* Centered text block */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-16 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-xl md:text-lg font-body tracking-widest uppercase text-black mb-4 font-semibold md:font-bold"
        >
          Al Arobby Islamic Centre
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="text-4xl md:text-6xl font-display text-white leading-tight mb-4 font-semibold md:font-bold"
        >
          {slide.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
          className="max-w-xl text-base md:text-lg font-body text-white leading-relaxed mb-8"
        >
          {slide.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <Link
            to="/madrasah"
            className="px-6 py-3 bg-gold text-black text-sm font-display rounded-full hover:bg-champagne transition-colors duration-300"
          >
            Explore Academy
          </Link>
          <Link
            to="/foundation"
            className="px-6 py-3 border border-white/40 text-white text-sm font-display rounded-full hover:border-black hover:text-black transition-colors duration-300"
          >
            Our Foundation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <HeroSlide slide={slides[activeIndex]} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 flex gap-2 -translate-x-1/2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${slide.headline} slide`}
            className={`w-8 h-1 transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display text-forest leading-snug mb-5">
          Knowledge that nurtures. <br /> Service that transforms.
        </h2>
        <p className="text-base font-body leading-relaxed text-charcoal">
          Al Arobby Islamic Centre exists to make authentic Quranic education
          accessible to every Muslim, regardless of age or location while
          serving humanity through compassion, charity, and community
          development. We believe that a mind grounded in knowledge and a heart
          moved to give are the foundations of a thriving Ummah.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <Link
          to="/madrasah"
          className="group flex flex-col gap-4 p-8 border border-stroke hover:border-emerald transition-colors duration-300"
        >
          <img
            src={madrasahThumb}
            alt="Online Madrasah"
            className="w-15 h-15 object-contain"
          />
          <h3 className="text-xl font-display text-forest">Online Madrasah</h3>
          <p className="text-sm font-body text-charcoal">
            Quran Reading, Memorization (Hifz), and Islamic Studies, flexible
            online learning for all ages.
          </p>
          <span className="text-sm font-body text-emerald group-hover:text-gold transition-colors duration-300">
            Explore Madrasah →
          </span>
        </Link>

        <Link
          to="/foundation"
          className="group flex flex-col gap-4 p-8 border border-stroke hover:border-gold transition-colors duration-300"
        >
          <img
            src={foundationThumb}
            alt="Foundation"
            className="w-15 h-15 object-contain"
          />
          <h3 className="text-xl font-display text-forest">Foundation</h3>
          <p className="text-sm font-body text-charcoal">
            Prayer Group (Asalatu) and Charity & Humanitarian Services, serving
            the community through faith and compassion.
          </p>
          <span className="text-sm font-body text-gold group-hover:text-emerald transition-colors duration-300">
            Explore Foundation →
          </span>
        </Link>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="bg-forest px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display text-white mb-3">
          Our core values
        </h2>
        <p className="text-lg font-body text-champagne/70 max-w-lg leading-relaxed mb-12">
          Al Arobby Islamic Centre is built on principles drawn from the Quran
          and Sunnah, values that shape how we teach, serve, and care for every
          person we reach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coreValues.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col gap-3 p-6 border border-champagne/10 hover:border-gold/40 transition-colors duration-300"
            >
              <Icon size={24} className="text-gold" />
              <p className="text-sm font-display text-white">{label}</p>
              <p className="text-xs font-body text-champagne/60 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-display text-forest mb-4">
            Who we serve
          </h2>
          <p className="text-base font-body text-charcoal leading-relaxed mb-4">
            Al Arobby Islamic Centre welcomes children, youth, and adults,
            beginners and advanced learners alike. Whether you are just starting
            to read the Quran or seeking to deepen your understanding of Islamic
            studies, there is a place for you here.
          </p>
          <p className="text-base font-body text-charcoal leading-relaxed mb-8">
            All you need is a smartphone, tablet, or computer and an internet
            connection. Our programmes are fully online, meaning you can join
            from anywhere in the world and learn at a pace that suits your life.
          </p>
          <div className="flex flex-col gap-3">
            {[
              "Children, youth, and adults welcome",
              "No prior Islamic knowledge required",
              "Fully online, join from anywhere",
              "Flexible schedule around your life",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald flex-shrink-0" />
                <p className="text-sm font-body text-charcoal">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              label: "Academy",
              value: "Quran & Islamic Studies",
              sub: "Tajweed · Hifz · Aqeedah · Fiqh · Seerah",
              color: "border-l-emerald",
              link: "/madrasah",
            },
            {
              label: "Prayer Group",
              value: "Daily · Friday · Monthly",
              sub: "6:30am daily · 9am Fridays · Instagram & TikTok Live",
              color: "border-l-gold",
              link: "/foundation/prayer-group",
            },
            {
              label: "Foundation",
              value: "Charity & Humanitarian",
              sub: "Ramadan feeding · Mosque project · Community relief",
              color: "border-l-forest",
              link: "/foundation/charity",
            },
          ].map(({ label, value, sub, color, link }) => (
            <Link
              key={label}
              to={link}
              className={`
                group p-5 border border-stroke border-l-4 ${color}
                hover:bg-charcoal/[0.02] transition-colors duration-300
                flex items-center justify-between
              `}
            >
              <div>
                <p className="text-xs font-body uppercase tracking-widest text-charcoal/50 mb-1">
                  {label}
                </p>
                <p className="text-base font-display text-forest mb-1">
                  {value}
                </p>
                <p className="text-xs font-body text-charcoal/60">{sub}</p>
              </div>
              <ArrowRight
                size={18}
                className="text-charcoal/30 group-hover:text-emerald group-hover:translate-x-1 transition-all duration-300 shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <CoreValues />
      <About />
    </>
  );
}
