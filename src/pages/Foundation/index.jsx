import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Compass,
  Users,
  HandHeart,
  Building2,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import ramadan from "../../assets/ramadan.jpg";
import family from "../../assets/family.jpg";
import community from "../../assets/community.jpg";
import social from "../../assets/social.jpg";
import charity4 from "../../assets/charity4.jpg";

const coreValues = [
  { label: "Faith and Trust in Allah", icon: Compass },
  { label: "Compassion and Mercy", icon: HeartHandshake },
  { label: "Integrity and Accountability", icon: ShieldCheck },
  { label: "Service to Humanity", icon: HandHeart },
  { label: "Community Empowerment", icon: Users },
  { label: "Transparency and Responsibility", icon: ShieldCheck },
  { label: "Unity and Brotherhood", icon: Users },
];

const impacts = [
  {
    label: "Ongoing Mosque Development Project",
    desc: "An ongoing effort to build a permanent mosque serving as a centre for worship, Quranic education, and community gatherings.",
    image: charity4,
  },
  {
    label: "Ramadan Feeding Programme",
    desc: "Distribution of food packages to families and individuals during Ramadan and other periods of need throughout the year.",
    image: ramadan,
  },
  {
    label: "Family & Welfare Support",
    desc: "Direct support for needy families and vulnerable individuals, providing relief assistance when it matters most.",
    image: family,
  },
  {
    label: "Community Outreach",
    desc: "Ongoing community welfare programmes that bring people together and strengthen the social fabric of the Ummah.",
    image: community,
  },
  {
    label: "Islamic Values & Social Welfare",
    desc: "Promoting unity, brotherhood, and Islamic values through faith-based initiatives that inspire lasting positive change.",
    image: social,
  },
];

const arms = [
  {
    label: "Prayer Group (Asalatu)",
    desc: "A faith-based gathering dedicated to spiritual growth, prayer, Islamic teachings, and community development, held live daily on Instagram and TikTok.",
    path: "/foundation/prayer-group",
    accent: "border-emerald hover:border-emerald",
    iconColor: "text-emerald",
    linkColor: "text-emerald group-hover:text-gold",
    icon: Compass,
  },
  {
    label: "Charity & Humanitarian Services",
    desc: "Serving vulnerable individuals and families through Sadaqah distribution, Ramadan feeding, food relief, and the ongoing Al Arobby Mosque Development Project.",
    path: "/foundation/charity",
    accent: "border-gold hover:border-gold",
    iconColor: "text-gold",
    linkColor: "text-gold group-hover:text-emerald",
    icon: HeartHandshake,
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
        <h1 className="text-4xl md:text-6xl font-display text-white font-bold md:font-semibold leading-tight">
          Al Arobby Islamic Foundation
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg font-body text-champagne mx-auto font-semibold md:font-normal leading-relaxed">
          Serving humanity through charity, compassion, and community support
          guided by the teachings of Islam.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">Our Story</h2>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            Al Arobby Islamic Foundation was established with the aim of serving
            humanity and promoting the values of Islam through charity,
            compassion, and community support. The foundation is dedicated to
            helping the less privileged, supporting families in need, feeding
            the hungry during Ramadan and throughout the year, and contributing
            to the spiritual and social development of the community. Through
            our mosque project and humanitarian initiatives, we strive to create
            a lasting positive impact and inspire others to participate in acts
            of kindness and service.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-display text-forest">Overview</h2>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            Al Arobby Islamic Foundation is a non-profit Islamic organization
            committed to humanitarian and community development efforts. Our
            activities include feeding the needy during Ramadan and throughout
            the year, supporting vulnerable individuals and families, providing
            relief assistance, and raising support for mosque construction and
            development projects. We work to improve lives and strengthen
            communities through faith-based charitable initiatives.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest mb-10">
            Vision & Mission
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10">
            <span className="inline-block w-8 h-0.5 bg-gold mb-5" />
            <h3 className="text-sm font-display uppercase tracking-widest text-gold mb-4">
              Vision
            </h3>
            <p className="text-lg font-body leading-relaxed text-charcoal">
              To build a caring and empowered community where every individual
              has access to support, dignity, and hope, a community shaped by
              the mercy, justice, and compassion taught by Islam, and committed
              to leaving the world better than it found it.
            </p>
          </div>
        </FadeIn>

        <div className="w-full h-px bg-stroke my-10" />

        <FadeIn delay={0.2}>
          <div className="mb-6">
            <span className="inline-block w-8 h-0.5 bg-emerald mb-5" />
            <h3 className="text-sm font-display uppercase tracking-widest text-emerald mb-4">
              Mission
            </h3>
            <p className="text-lg font-body leading-relaxed text-charcoal">
              To serve humanity through charitable programs, food distribution,
              community support, and Islamic development projects, including the
              construction and maintenance of mosques while promoting
              compassion, unity, and social responsibility guided by the
              teachings of the Quran and Sunnah.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">Core Values</h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <FadeIn key={value.label} delay={0.08 * index}>
              <div className="flex items-start gap-3 p-6 border border-stroke h-full">
                <Icon size={20} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-body text-charcoal">
                  {value.label}
                </span>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-body tracking-widest uppercase text-gold mb-3">
            What we have done
          </p>
          <h2 className="text-3xl font-display text-forest mb-3">
            Impact & Achievements
          </h2>
          <p className="max-w-2xl text-base font-body text-charcoal mb-12">
            Our foundation continues to impact lives through consistent
            humanitarian service and community-driven development, guided always
            by the teachings of Islam.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, index) => (
            <FadeIn key={item.label} delay={0.08 * index}>
              <div className="flex flex-col bg-white border border-stroke overflow-hidden h-full">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-forest/10 flex items-center justify-center">
                    <Building2 size={32} className="text-forest/30" />
                  </div>
                )}
                <div className="flex flex-col gap-2 p-6 flex-1">
                  <div className="w-8 h-0.5 bg-gold mb-1" />
                  <h3 className="text-base font-display text-forest">
                    {item.label}
                  </h3>
                  <p className="text-sm font-body text-charcoal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Arms() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">Our Arms</h2>
        <p className="mt-4 max-w-2xl text-base font-body text-charcoal">
          The Foundation operates through two distinct arms, each dedicated to a
          specific dimension of service and community development.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {arms.map((arm, index) => {
          const Icon = arm.icon;
          return (
            <FadeIn key={arm.label} delay={0.1 * index}>
              <Link
                to={arm.path}
                className={`
                  group flex flex-col gap-5
                  p-10 h-full
                  border-2
                  transition-colors duration-300
                  ${arm.accent}
                `}
              >
                <Icon size={36} className={arm.iconColor} />
                <h3 className="text-2xl font-display text-forest">
                  {arm.label}
                </h3>
                <p className="text-sm font-body text-charcoal">{arm.desc}</p>
                <span
                  className={`
                    flex items-center gap-2
                    mt-auto
                    text-sm font-body
                    transition-colors duration-300
                    ${arm.linkColor}
                  `}
                >
                  Explore
                  <ArrowRight size={16} />
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function Donate() {
  const [activeTab, setActiveTab] = useState("ngn");
  const [copiedField, setCopiedField] = useState(null);

  function handleCopy(value, field) {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  }

  function CopyButton({ value, field }) {
    return (
      <button
        type="button"
        onClick={() => handleCopy(value, field)}
        className="
          flex-shrink-0
          px-4 py-2
          text-xs font-body
          border border-gold text-gold
          hover:bg-gold hover:text-white
          transition-colors duration-300
        "
      >
        {copiedField === field ? "Copied ✓" : "Copy"}
      </button>
    );
  }

  function Field({ label, value, copyable = false, fieldKey }) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-xs font-body uppercase tracking-wide text-gold">
          {label}
        </p>
        {copyable ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-neutral border border-stroke">
            <p className="text-sm md:text-base font-body text-charcoal break-all">
              {value}
            </p>
            <CopyButton value={value} field={fieldKey} />
          </div>
        ) : (
          <p className="text-sm md:text-base font-body text-charcoal break-words">
            {value}
          </p>
        )}
      </div>
    );
  }

  const accounts = {
    ngn: {
      label: "NGN",
      fields: [
        { label: "Bank Name", value: "Wema Bank" },
        { label: "Account Name", value: "Muhammed Adeniyi Adesina" },
        {
          label: "Account Number",
          value: "7650714516",
          copyable: true,
          fieldKey: "ngn-acc",
        },
      ],
    },
    eu: {
      label: "EU",
      fields: [
        { label: "Bank Name", value: "Clear Junction Limited" },
        { label: "Account Name", value: "Muhammed Adeniyi Adesina" },
        {
          label: "Account Number",
          value: "42824007",
          copyable: true,
          fieldKey: "eu-acc",
        },
        {
          label: "IBAN",
          value: "GB40CLJU04130742824007",
          copyable: true,
          fieldKey: "eu-iban",
        },
        {
          label: "Swift Code",
          value: "CLJUGB21XXX",
          copyable: true,
          fieldKey: "eu-swift",
        },
        {
          label: "Sort Code",
          value: "041307",
          copyable: true,
          fieldKey: "eu-sort",
        },
        {
          label: "Bank Address",
          value:
            "4th Floor Imperial House, 15 Kingsway, London, United Kingdom, WC2B 6UN",
        },
      ],
    },
    us: {
      label: "US",
      fields: [
        { label: "Bank Name", value: "Lead Bank" },
        { label: "Account Name", value: "Muhammed Adeniyi Adesina" },
        {
          label: "Account Number",
          value: "214838601173",
          copyable: true,
          fieldKey: "us-acc",
        },
        { label: "Account Type", value: "Checking" },
        {
          label: "Wire Routing",
          value: "101019644",
          copyable: true,
          fieldKey: "us-wire",
        },
        {
          label: "ACH Routing",
          value: "101019644",
          copyable: true,
          fieldKey: "us-ach",
        },
        {
          label: "Bank Address",
          value: "1801 Main St., Kansas City, MO 64108",
        },
      ],
    },
    uk: {
      label: "UK",
      fields: [
        { label: "Bank Name", value: "Clear Junction Limited" },
        { label: "Account Name", value: "Muhammed Adeniyi Adesina" },
        {
          label: "Account Number",
          value: "42824007",
          copyable: true,
          fieldKey: "uk-acc",
        },
        {
          label: "IBAN",
          value: "GB40CLJU04130742824007",
          copyable: true,
          fieldKey: "uk-iban",
        },
        {
          label: "Swift Code",
          value: "CLJUGB21XXX",
          copyable: true,
          fieldKey: "uk-swift",
        },
        {
          label: "Sort Code",
          value: "041307",
          copyable: true,
          fieldKey: "uk-sort",
        },
        {
          label: "Bank Address",
          value:
            "4th Floor Imperial House, 15 Kingsway, London, United Kingdom, WC2B 6UN",
        },
      ],
    },
  };

  const active = accounts[activeTab];

  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-forest">
            Support Our Work
          </h2>
          <p className="mt-4 text-base font-body text-charcoal">
            Your donation directly supports our Ramadan feeding programme,
            emergency welfare assistance, and the ongoing Al Arobby Mosque
            Development Project. Every contribution makes a lasting difference.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col mt-10 border border-gold bg-white">
            {/* Tabs */}
            <div className="flex border-b border-stroke">
              {Object.entries(accounts).map(([key, acc]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`
                    flex-1 py-4 text-xs font-body uppercase tracking-widest
                    transition-colors duration-300
                    ${
                      activeTab === key
                        ? "bg-forest text-white"
                        : "text-charcoal hover:text-forest"
                    }
                  `}
                >
                  {acc.label}
                </button>
              ))}
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-6 p-6 md:p-10">
              <h3 className="text-xl font-display text-forest">
                {active.label} Donation Details
              </h3>

              {active.fields.map((field) => (
                <Field
                  key={field.fieldKey || field.label}
                  label={field.label}
                  value={field.value}
                  copyable={field.copyable}
                  fieldKey={field.fieldKey}
                />
              ))}

              <div className="border-t border-stroke pt-6 flex flex-col gap-4">
                <p className="text-sm font-body text-charcoal">
                  After donating, please reach out via WhatsApp or email to
                  confirm your contribution.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/2348168919665"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
                  >
                    <Phone size={16} className="text-emerald flex-shrink-0" />
                    <span className="break-all">
                      +234 816 891 9665 (WhatsApp)
                    </span>
                  </a>

                  <a
                    href="mailto:adeshinamuhammad001@gmail.com"
                    className="flex items-center gap-3 text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
                  >
                    <Mail size={16} className="text-emerald flex-shrink-0" />
                    <span className="break-all">
                      adeshinamuhammad001@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Foundation() {
  return (
    <>
      <Hero />
      <Story />
      <MissionVision />
      <CoreValues />
      <Impact />
      <Arms />
      <Donate />
    </>
  );
}
