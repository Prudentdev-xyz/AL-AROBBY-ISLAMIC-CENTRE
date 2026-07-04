import { Link } from "react-router-dom";
import { Mail, Phone, Send } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Madrasah", path: "/madrasah" },
  { label: "Foundation", path: "/foundation" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/al_arobby",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18tTmajPhx/?mibextid=wwXIfr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/alarobbyislamicacademy",
    icon: <Send size={20} />,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full
        px-6 py-12
        border-t
        bg-forest border-forest
      "
    >
      <div
        className="
          grid grid-cols-1 md:grid-cols-3
          gap-10
          max-w-6xl mx-auto
        "
      >
        {/* Brand */}
        <div>
          <h3 className="text-lg font-display text-white">
            AL AROBBY ISLAMIC CENTRE
          </h3>
          <p className="mt-3 text-sm font-body leading-relaxed text-champagne">
            Online Madrasah and Foundation serving authentic Islamic education,
            prayer, and humanitarian support.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <ul className="flex flex-col gap-2 mt-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm font-body transition-colors duration-200 text-champagne hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div>
          <h4 className="text-sm font-display tracking-wide text-white">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <a
                href="mailto:alarobbyislamicacademy@gmail.com"
                className="text-sm font-body text-champagne hover:text-gold"
              >
                alarobbyislamicacademy@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />

              <a
                href="https://wa.me/2349026128141"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-body text-champagne hover:text-gold"
              >
                +234 902 612 8141
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-5">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-champagne hover:text-gold transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p
        className="
          mt-10 pt-6
          border-t border-emerald/30
          text-xs font-body text-center text-champagne/70
        "
      >
        © {new Date().getFullYear()} Al Arobby Islamic Centre. All rights
        reserved.
      </p>
    </footer>
  );
}
