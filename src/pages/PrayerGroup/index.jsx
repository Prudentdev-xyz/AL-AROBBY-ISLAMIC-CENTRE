import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  CalendarDays,
  Users,
  Mic2,
  Heart,
  Star,
  Image as ImageIcon,
} from "lucide-react";
import prayer1 from "../../assets/prayer1.jpg";
import prayer2 from "../../assets/prayer2.jpg";
import prayer6 from "../../assets/prayer6.jpg";
import prayer3 from "../../assets/prayer3.jpg";
import prayer4 from "../../assets/prayer4.jpg";
import prayer5 from "../../assets/prayer5.jpg";

const programmes = [
  "Weekly Friday Asalatu Prayer Session",
  "End-of-Month Special Prayer Programme",
  "Early Morning Special Prayer",
  "Islamic Lectures and Reminders",
  "Community Prayer and Spiritual Support",
  "Special Ramadan and Islamic Event Programmes",
];

const schedule = [
  {
    label: "Daily Programme",
    day: "Every Day",
    time: "6:30 AM – 7:30 AM",
    icon: Clock,
  },
  {
    label: "Friday Asalatu",
    day: "Every Friday",
    time: "9:00 AM – 10:00 AM",
    icon: CalendarDays,
  },
  {
    label: "End-of-Month Prayer",
    day: "Last Day of Every Month",
    time: "6:30 AM – 7:30 AM",
    icon: Star,
  },
];

const platforms = [
  {
    name: "Instagram Live",
    handle: "@al_arobby",
    href: "https://www.instagram.com/al_arobby?igsh=eTNudTZ4MG9tcGpv",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok Live",
    handle: "@prayer_therapist",
    href: "https://www.tiktok.com/@prayer_therapist?_r=1&_t=ZS-97RzgGoY43w",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
];

const mediaPlaceholders = [
  { label: "Friday Asalatu Programme", image: prayer1 },
  { label: "Ramadan Programme", image: prayer2 },
  { label: "Islamic Event Programme", image: prayer6 },
  { label: "Instagram Live Session", image: prayer3 },
  { label: "TikTok Live Session", image: prayer4 },
  { label: "Community Prayer", image: prayer5 },
];

const impacts = [
  { label: "Strengthens faith and spiritual consistency", icon: Heart },
  { label: "Solves spiritual challenges through guided prayer", icon: Star },
  { label: "Builds a supportive Islamic community", icon: Users },
  { label: "Provides Islamic lectures and spiritual reminders", icon: Mic2 },
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
      <div className="max-w-3xl mx-auto md:mx-0">
        <p className="text-sm font-body text-gold tracking-wide uppercase mb-4">
          Al Arobby Foundation
        </p>
        <h1 className="text-4xl md:text-6xl font-display text-white font-bold md:font-semibold leading-tight">
          Prayer Group (Asalatu)
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg font-body text-champagne font-semibold md:font-medium leading-relaxed">
          A faith-based gathering dedicated to spiritual growth, prayer, Islamic
          teachings, and community development.
        </p>

        <Link
          to="/foundation/prayer-group/apply"
          className="
            inline-block mt-8 px-8 py-4
            bg-white text-sm font-body text-forest
            hover:bg-champagne transition-colors duration-300
          "
        >
          Apply for Membership
        </Link>

        <div>
          <Link
            to="/foundation"
            className="
              inline-block mt-6
              text-sm font-body text-champagne
              hover:text-gold transition-colors duration-300 font-bold md:font-normal
            "
          >
            ← Back to Foundation
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            Al Arobby Prayer Group (Asalatu) is a faith-based gathering
            dedicated to spiritual growth, prayer, Islamic teachings, and
            community development. The group provides a platform for Muslims to
            strengthen their relationship with Allah through regular prayers,
            supplications, and religious discussions.
          </p>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            All programmes are conducted online, allowing participants from
            different locations to join and benefit from the prayer sessions.
            Sessions are held live on Instagram and TikTok, making it accessible
            to Muslims everywhere.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-display text-forest">
            Regular Programmes
          </h2>
          <ul className="flex flex-col gap-3 mt-4">
            {programmes.map((item) => (
              <li
                key={item}
                className="
                  flex items-start gap-3
                  text-sm font-body text-charcoal
                "
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">
            Programme Schedule
          </h2>
          <p className="mt-4 max-w-xl text-base font-body text-charcoal">
            All sessions are conducted online via Instagram Live and TikTok
            Live. Join from anywhere in the world.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {schedule.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={0.1 * index}>
                <div
                  className="
                    flex flex-col gap-4
                    p-8
                    border-t-4 border-gold
                    bg-white
                    h-full
                  "
                >
                  <Icon size={28} className="text-gold" />
                  <h3 className="text-lg font-display text-forest">
                    {item.label}
                  </h3>
                  <div className="flex flex-col gap-1 mt-auto">
                    <p className="text-sm font-body text-emerald">{item.day}</p>
                    <p className="text-base font-display text-charcoal">
                      {item.time}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="px-6 py-20 bg-forest">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-white">Join Us Online</h2>
          <p className="mt-4 max-w-xl text-base font-body text-champagne">
            Our programmes are broadcast live on Instagram and TikTok. Follow us
            and join our next session.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {platforms.map((platform, index) => (
            <FadeIn key={platform.name} delay={0.1 * index}>
              <a
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className="
                  group flex items-center gap-6
                  p-8
                  border border-white/10
                  bg-white/5
                  hover:border-gold
                  transition-colors duration-300
                "
              >
                <span className="text-champagne group-hover:text-gold transition-colors duration-300">
                  {platform.icon}
                </span>
                <div>
                  <h3 className="text-lg font-display text-white">
                    {platform.name}
                  </h3>
                  <p className="text-sm font-body text-champagne mt-1">
                    {platform.handle}
                  </p>
                </div>
                <span
                  className="
                    ml-auto text-sm font-body
                    text-champagne group-hover:text-gold
                    transition-colors duration-300
                  "
                >
                  Follow →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">
          Impact of the Prayer Group
        </h2>
        <p className="mt-4 max-w-2xl text-base font-body text-charcoal">
          The prayer group has helped participants strengthen their faith, solve
          most of their spiritual challenges, maintain consistency in worship,
          seek spiritual guidance, and build a supportive Islamic community
          through regular prayer gatherings and Islamic reminders.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {impacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.label} delay={0.1 * index}>
              <div
                className="
                  flex items-start gap-4
                  p-6
                  border border-stroke
                  h-full
                "
              >
                <Icon size={22} className="text-emerald shrink-0 mt-0.5" />
                <p className="text-sm font-body text-charcoal">{item.label}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function MediaGallery() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">Media & Gallery</h2>
          <p className="mt-4 max-w-xl text-base font-body text-charcoal">
            Moments from our Friday Asalatu programmes, Ramadan sessions, and
            community prayer gatherings.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {mediaPlaceholders.map((item, index) => (
            <FadeIn key={item.label} delay={0.06 * index}>
              <img
                src={item.image}
                alt={item.label}
                className="w-full aspect-square object-cover"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplyCTA() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">
          Join the Prayer Group
        </h2>
        <p className="mt-4 text-base font-body text-charcoal">
          Apply to become a member of Al Arobby Prayer Group (Asalatu). On
          completion, you will receive a digital membership card.
        </p>
        <Link
          to="/foundation/prayer-group/apply"
          className="
            inline-block mt-8 px-8 py-4
            bg-forest
            text-sm font-body text-white
            hover:bg-emerald
            transition-colors duration-300
          "
        >
          Apply for Membership
        </Link>
      </FadeIn>
    </section>
  );
}

export default function PrayerGroup() {
  return (
    <>
      <Hero />
      <About />
      <Schedule />
      <Platforms />
      <Impact />
      <MediaGallery />
      <ApplyCTA />
    </>
  );
}
