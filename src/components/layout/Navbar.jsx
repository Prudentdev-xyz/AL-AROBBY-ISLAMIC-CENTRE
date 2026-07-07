import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Madrasah", path: "/madrasah" },
];

const foundationLinks = [
  { label: "Foundation", path: "/foundation" },
  { label: "Prayer Group", path: "/foundation/prayer-group" },
  { label: "Charity", path: "/foundation/charity" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileFoundationOpen, setIsMobileFoundationOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isFoundationActive = location.pathname.startsWith("/foundation");

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Foundation dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsDesktopDropdownOpen((prev) => !prev)}
              className={`
                flex items-center gap-1
                text-sm font-body transition-colors duration-300
                ${
                  isFoundationActive
                    ? "text-emerald"
                    : "text-charcoal hover:text-emerald"
                }
              `}
            >
              Foundation
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  isDesktopDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDesktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="
                    absolute top-full left-1/2 -translate-x-1/2 mt-3
                    w-56
                    bg-white border border-stroke
                    shadow-lg
                    flex flex-col
                  "
                >
                  {foundationLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === "/foundation"}
                      onClick={() => setIsDesktopDropdownOpen(false)}
                      className={({ isActive }) =>
                        `px-5 py-3 text-sm font-body text-left transition-colors duration-300 ${
                          isActive
                            ? "text-emerald bg-neutral"
                            : "text-charcoal hover:text-emerald hover:bg-neutral"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
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
              overflow-y-auto py-20
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

            {/* Foundation expandable section — mobile */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={() => setIsMobileFoundationOpen((prev) => !prev)}
                className={`
                  flex items-center gap-2 text-lg font-body
                  ${isFoundationActive ? "text-emerald" : "text-charcoal"}
                `}
              >
                Foundation
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    isMobileFoundationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMobileFoundationOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 overflow-hidden"
                  >
                    {foundationLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        end={link.path === "/foundation"}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileFoundationOpen(false);
                        }}
                        className={({ isActive }) =>
                          `text-base font-body ${
                            isActive ? "text-emerald" : "text-charcoal/70"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
