import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Building2,
  Users,
  BookOpen,
  ShieldCheck,
  Zap,
  Image as ImageIcon,
  Phone,
  Mail,
} from "lucide-react";
import charity1 from "../../assets/charity1.jpg";
import charity2 from "../../assets/charity2.jpg";
import charity3 from "../../assets/charity3.jpg";
import charity5 from "../../assets/charity5.jpg";
import charity4 from "../../assets/charity4.jpg";
import charity6 from "../../assets/charity6.jpg";
import mosquePlan from "../../assets/al-arobby-mosque-plan.jpg";

const areasOfImpact = [
  { label: "Sadaqah Distribution", icon: HeartHandshake },
  { label: "Ramadan Feeding Programme", icon: Users },
  { label: "Food Relief and Welfare Support", icon: Zap },
  { label: "Mosque Construction and Development", icon: Building2 },
  { label: "Community Development", icon: Users },
  { label: "Islamic Education Support", icon: BookOpen },
  {
    label: "Emergency Assistance for Vulnerable Individuals and Families",
    icon: ShieldCheck,
  },
];

const mosqueObjectives = [
  "Provide a conducive place of worship for Muslims",
  "Promote Islamic education and learning",
  "Support community development and unity",
  "Create a center for religious and social activities",
  "Serve future generations through sustainable Islamic infrastructure",
];

const mosqueOutcomes = [
  "Increased access to a proper worship facility",
  "Enhanced community participation in Islamic activities",
  "Strengthened Islamic education and spiritual growth",
  "Serve as a centre for Quranic and Islamic studies",
];

const mediaAssets = [
  {
    label: "Mosque Project — Phase 1",
    caption:
      "Early construction phase of the Al Arobby Mosque Development Project.",
    image: charity1,
  },
  {
    label: "Ramadan Feeding Programme",
    caption: "Distributing food packages to families in need during Ramadan.",
    image: charity2,
  },

  {
    label: "Charity Outreach Activity",
    caption: "Community outreach programme supporting vulnerable individuals.",
    image: charity3,
  },
  {
    label: "Mosque Project — Current Progress",
    caption:
      "Ongoing development of the mosque facility serving the community.",
    image: charity4,
  },
  {
    label: "Community Development Event",
    caption: "Faith-based community gathering and development initiative.",
    image: charity5,
  },
  {
    label: "Humanitarian Support Programme",
    caption: "Providing emergency assistance and welfare support to families.",
    image: charity6,
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
      <div className="max-w-3xl mx-auto md:mx-0">
        <p className="text-sm font-body text-gold tracking-wide uppercase mb-4">
          Al Arobby Foundation
        </p>
        <h1 className="text-4xl md:text-6xl font-display text-white font-bold md:font-semibold leading-tight">
          Charity & Humanitarian Services
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg font-body text-champagne font-semibold md:font-medium leading-relaxed">
          Serving humanity through compassion, charitable giving, and community
          development, inspired by the teachings of Islam.
        </p>

        
         <a href="#donate"
          className="
            inline-block mt-8 px-8 py-4
            bg-white text-sm font-body text-forest
            hover:bg-champagne transition-colors duration-300
          "
        >
          Support Our Work
        </a>

        <div>
          <Link
            to="/foundation"
            className="
              inline-block mt-6
              text-sm font-body text-champagne
              hover:text-gold transition-colors duration-300
            "
          >
            ← Back to Foundation
          </Link>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn>
          <p className="mt-4 text-base font-body leading-relaxed text-charcoal">
            Al Arobby Islamic Foundation is committed to serving humanity
            through charitable and humanitarian activities inspired by the
            teachings of Islam. Our charity arm focuses on supporting vulnerable
            individuals and families, feeding the needy during Ramadan and
            throughout the year, promoting community welfare, and supporting
            mosque development projects that serve as centers for worship,
            education, and community growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl font-display text-forest">Areas of Impact</h2>
          <ul className="flex flex-col gap-3 mt-4">
            {areasOfImpact.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-start gap-3">
                  <Icon size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm font-body text-charcoal">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function MosqueProject() {
  return (
    <section className="px-6 py-20 bg-neutral">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Building2 size={28} className="text-gold" />
            <h2 className="text-3xl font-display text-forest">
              Al Arobby Mosque Development Project
            </h2>
          </div>
          <div
            className="
              inline-flex items-center gap-2
              mt-4 px-4 py-2
              bg-gold/10 border border-gold
            "
          >
            <span className="w-2 h-2 rounded-full bg-gold" />
            <p className="text-xs font-body text-gold">
              Project Status: Ongoing — Seeking donations and support
            </p>
          </div>
          <p className="mt-6 max-w-3xl text-base font-body leading-relaxed text-charcoal">
            The Al Arobby Mosque Development Project aims to establish and
            improve a mosque that will serve as a place of worship, Islamic
            learning, community gatherings, and spiritual development for
            Muslims within the community. The project benefits Muslims across
            the globe, including children, youth, adults, and visitors who
            require access to a suitable place of worship and Islamic learning.
          </p>
        </FadeIn>

        <div className="mt-12">
          <img
            src={mosquePlan}
            alt="Al Arobby Mosque — two story design, floor plans, and construction phases"
            className="w-full h-auto block border border-forest/20"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
          <FadeIn delay={0.1}>
            <h3 className="text-xl font-display text-forest">
              Project Objectives
            </h3>
            <ul className="flex flex-col gap-3 mt-4">
              {mosqueObjectives.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-body text-charcoal"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h3 className="text-xl font-display text-forest">
              Project Outcomes
            </h3>
            <ul className="flex flex-col gap-3 mt-4">
              {mosqueOutcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-body text-charcoal"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MediaGallery() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-display text-forest">Moments of impact</h2>
        <p className="mt-4 max-w-xl text-base font-body text-charcoal">
          Documented proof of our humanitarian work, mosque development
          progress, and community impact on the ground.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {mediaAssets.map((asset, index) => (
          <FadeIn key={asset.label} delay={0.06 * index}>
            <div className="flex flex-col gap-0">
              {asset.image ? (
                <img
                  src={asset.image}
                  alt={asset.label}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div
                  className="
                    flex flex-col items-center justify-center gap-2
                    w-full aspect-video
                    bg-neutral border border-stroke
                  "
                >
                  <ImageIcon size={28} className="text-champagne" />
                  <p className="text-xs font-body text-charcoal/50">
                    {asset.label}
                  </p>
                </div>
              )}

              <div className="p-3 border border-t-0 border-stroke bg-white">
                <p className="text-xs font-body text-charcoal">
                  {asset.caption}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
function BeneficiaryStory() {
  return (
    <section className="px-6 py-20 bg-forest">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-display text-white">
            Success & Impact Stories
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 p-10 border-l-4 border-gold bg-white/5">
            <p className="text-base font-body leading-relaxed text-champagne">
              Through the support of donors and volunteers, Al Arobby Islamic
              Foundation has been able to provide food assistance during Ramadan
              and support community members in need. The mosque project
              continues to bring hope to the community by creating a permanent
              center for worship, education, and social development.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Transparency() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-3">
          <ShieldCheck size={24} className="text-emerald" />
          <h2 className="text-3xl font-display text-forest">
            Transparency & Accountability
          </h2>
        </div>
        <p className="mt-4 max-w-3xl text-base font-body leading-relaxed text-charcoal">
          Al Arobby Islamic Foundation is committed to transparency and
          responsible management of donations and charitable contributions.
          Funds received are utilized solely for approved charitable activities,
          humanitarian support, and mosque development projects. Financial
          records and project updates are made available whenever possible to
          maintain donor confidence and accountability.
        </p>
      </FadeIn>
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
    <section id="donate" className="px-6 py-20 bg-neutral">
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
                  
                   <a href="https://wa.me/2348168919665"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm font-body text-charcoal hover:text-emerald transition-colors duration-300"
                  >
                    <Phone size={16} className="text-emerald flex-shrink-0" />
                    <span className="break-all">
                      +234 816 891 9665 (WhatsApp)
                    </span>
                  </a>

                  
                   <a href="mailto:adeshinamuhammad001@gmail.com"
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

export default function Charity() {
  return (
    <>
      <Hero />
      <Overview />
      <MosqueProject />
      <MediaGallery />
      <BeneficiaryStory />
      <Transparency />
      <Donate />
    </>
  );
}