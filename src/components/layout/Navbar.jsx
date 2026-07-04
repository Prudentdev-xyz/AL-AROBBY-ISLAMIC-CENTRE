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
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Al Arobby Islamic Centre logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-display text-sm md:text-xl text-forest">
            AL AROBBY ISLAMIC CENTRE
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-body transition-colors duration-200 ${
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden flex flex-col gap-4 mt-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-body ${
                      isActive ? "text-emerald" : "text-charcoal"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
