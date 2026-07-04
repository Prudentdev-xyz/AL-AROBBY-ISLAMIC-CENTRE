import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Madrasah", path: "/madrasah" },
  { label: "Foundation", path: "/foundation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        px-6 py-4
        border-b border-champagne/30
        bg-white
      "
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Al Arobby Islamic Centre logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-display text-sm md:text-xl text-forest">
            AL AROBBY ISLAMIC CENTRE
          </span>
        </Link>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-body transition-colors duration-300 ${
                    isActive
                      ? "text-emerald"
                      : "text-charcoal hover:text-emerald"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA button — desktop only */}
        <Link
          to="/foundation/charity"
          className="
            hidden md:inline-block
            px-6 py-3
            bg-forest text-sm font-body text-white
            hover:bg-emerald transition-colors duration-300
          "
        >
          Donate
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-forest"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="
              md:hidden fixed inset-0 top-0 z-40
              bg-white
              flex flex-col items-center justify-center gap-8
            "
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-forest"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-body ${
                    isActive ? "text-emerald" : "text-charcoal"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/foundation/charity"
              onClick={() => setIsOpen(false)}
              className="
                mt-4 px-8 py-4
                bg-forest text-sm font-body text-white
                hover:bg-emerald transition-colors duration-300
              "
            >
              Donate
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
