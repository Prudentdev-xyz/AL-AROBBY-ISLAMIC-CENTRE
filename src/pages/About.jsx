import { motion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  GraduationCap,
  Award,
  Compass,
} from "lucide-react";
import founderPhoto from "../assets/sheikh.jpg";

const madrasahValues = [
  "Sincerity (Ikhlas)",
  "Excellence in Learning",
  "Integrity and Honesty",
  "Respect and Good Character",
  "Commitment to Islamic Values",
  "Service to the Ummah",
  "Lifelong Learning",
];

const foundationValues = [
  "Faith and Trust in Allah",
  "Compassion and Mercy",
  "Integrity and Accountability",
  "Service to Humanity",
  "Community Empowerment",
  "Transparency and Responsibility",
  "Unity and Brotherhood",
];

const education = [
  "Master of Arts (M.A.) in Islamic Studies, Olabisi Onabanjo University (OOU), Nigeria",
  "Bachelor of Arts (B.A.) in Islamic Studies, Crescent University, Abeokuta, Nigeria",
  "Nigeria Certificate in Education (NCE) in Arabic and Islamic Education, Bari College of Arabic and Islamic Studies",
  "Higher Islamic Studies Certificate, Arabic Teachers’ College",
  "Senior Secondary Education in Arabic and Islamic Studies, Arabic Institutions of Nigeria",
];

const certifications = [
  "Entrepreneurship Crescent University, Abeokuta",
  "A Student as a Good Example audi Arabian Embassy, Abuja, Nigeria",
  "Programming",
  "Customer Service and Relationship Management (CSRM)",
];

const foundingRoles = [
  {
    role: "Founder and President",
    org: "Al-Arobby Islamic Foundation Worldwide",
    desc: "An organization committed to promoting Islamic values, education, humanitarian services, da’wah activities, and community development across the globe.",
  },
  {
    role: "Founder",
    org: "Al-Arobby Islamic Academy for Qur’an and Islamic Studies",
    desc: "A dedicated institution focused on providing quality Qur’anic education, Islamic studies, character development, and moral training for students of all ages.",
  },
  {
    role: "Founder and Prayer Therapist",
    org: "Al-Arobby Prayer Group",
    desc: "A faith-based platform established to encourage spiritual growth, collective remembrance of Allah, counseling, prayer therapy, and support for Muslims seeking guidance and inner peace.",
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
    flex flex-col items-center justify-center
    h-[50vh] md:h-[60vh]
    px-6 md:px-16
    bg-forest
  "
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-8xl font-display text-white font-bold md:font-semibold leading-tight">
          About Al Arobby Islamic Centre
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg font-body text-champagne mx-auto">
          An incubation of online Quranic education and humanitarian service,
          nurturing knowledge, faith, and good character, while serving humanity
          through compassion and community support.
        </p>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        {/* <h2 className="text-3xl font-display text-forest">Who We Are</h2> */}
        <p className="mt-4 max-w-3xl text-base font-body leading-relaxed text-charcoal">
          Al Arobby Islamic Centre is built on two arms working toward one
          purpose: the Madrasah, an online academy making authentic Quranic and
          Islamic education accessible to students around the world, and the
          Foundation, a non-profit serving humanity through prayer, compassion,
          and charitable support.
        </p>
      </FadeIn>

      {/* Services breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4 p-8 border border-stroke h-full">
            <GraduationCap size={32} className="text-emerald" />
            <h3 className="text-lg font-display text-forest">
              Online Madrasah
            </h3>
            <p className="text-sm font-body text-charcoal">
              Quran Reading & Tajweed, Quran Memorization (Hifz), and Islamic
              Studies flexible learning for children, youth, and adults.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-4 p-8 border border-stroke h-full">
            <Compass size={32} className="text-gold" />
            <h3 className="text-lg font-display text-forest">
              Prayer Group (Asalatu)
            </h3>
            <p className="text-sm font-body text-charcoal">
              Daily and Friday prayer gatherings, Islamic lectures, and
              spiritual support, held live on Instagram and TikTok.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col gap-4 p-8 border border-stroke h-full">
            <HeartHandshake size={32} className="text-emerald" />
            <h3 className="text-lg font-display text-forest">
              Charity & Humanitarian Services
            </h3>
            <p className="text-sm font-body text-charcoal">
              Ramadan feeding, Sadaqah distribution, emergency assistance, and
              the ongoing Al Arobby Mosque Development Project.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Core values — Madrasah + Foundation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3">
            <BookOpen size={22} className="text-emerald" />
            <h3 className="text-xl font-display text-forest">Academy Values</h3>
          </div>
          <ul className="flex flex-col gap-2 mt-4">
            {madrasahValues.map((value) => (
              <li key={value} className="text-sm font-body text-charcoal">
                ✦ {value}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3">
            <HeartHandshake size={22} className="text-gold" />
            <h3 className="text-xl font-display text-forest">
              Foundation Values
            </h3>
          </div>
          <ul className="flex flex-col gap-2 mt-4">
            {foundationValues.map((value) => (
              <li key={value} className="text-sm font-body text-charcoal">
                ✦ {value}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">
            About the Founder
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {/* Founder photo placeholder */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              <img
                src={founderPhoto}
                className="w-full aspect-[4/5] object-cover"
                alt="Sheikh Muhammad Abdullah Adesina"
              />
              <div>
                <h3 className="text-xl font-display text-forest">
                  Sheikh Muhammad Abdullah Adesina
                </h3>
                <p className="text-sm font-body text-gold">(Al-Arobby)</p>
              </div>
            </div>
          </FadeIn>

          {/* Bio + founding roles */}
          <div className="md:col-span-2 flex flex-col gap-10">
            <FadeIn delay={0.15}>
              <p className="text-base font-body leading-relaxed text-charcoal">
                Sheikh Muhammad Abdullah Adesina (Al-Arobby) is a renowned
                Islamic scholar, educator, prayer therapist, and founder
                dedicated to the propagation of authentic Islamic knowledge and
                spiritual development. Through his various educational and
                religious initiatives, he has contributed significantly to
                Islamic learning, Qur'anic education, and community development
                both locally and internationally.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-emerald" />
                <h4 className="text-lg font-display text-forest">
                  Educational Background
                </h4>
              </div>
              <ul className="flex flex-col gap-2 mt-3">
                {education.map((item) => (
                  <li key={item} className="text-sm font-body text-charcoal">
                    ✦ {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex items-center gap-3">
                <Award size={20} className="text-gold" />
                <h4 className="text-lg font-display text-forest">
                  Professional Certifications
                </h4>
              </div>
              <ul className="flex flex-col gap-2 mt-3">
                {certifications.map((item) => (
                  <li key={item} className="text-sm font-body text-charcoal">
                    ✦ {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Founding roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {foundingRoles.map((item, index) => (
            <FadeIn key={item.org} delay={0.1 * index}>
              <div className="flex flex-col gap-3 p-8 border border-stroke bg-white h-full">
                <span className="text-xs font-body uppercase tracking-wide text-gold">
                  {item.role}
                </span>
                <h4 className="text-lg font-display text-forest">{item.org}</h4>
                <p className="text-sm font-body text-charcoal">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Vision */}
        <FadeIn delay={0.1}>
          <div className="mt-16 p-10 md:p-16 bg-white text-center max-w-3xl mx-auto">
            <span className="inline-block w-10 h-0.5 bg-gold mb-6" />
            <p className="text-lg md:text-xl font-body leading-relaxed text-charcoal italic">
              "Every great society begins with individuals whose hearts are
              anchored in faith and whose actions are guided by knowledge. That
              conviction is the foundation of this institution. Our purpose is
              to nurture a generation that loves the Qur'an, embodies the values
              of Islam, pursues beneficial knowledge with excellence, and serves
              humanity with sincerity, leaving a lasting impact in this world
              and earning success in the Hereafter."
            </p>
            <span className="inline-block w-10 h-0.5 bg-gold mt-6" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Hero />
      <Overview />
      <FounderSection />
    </>
  );
}
