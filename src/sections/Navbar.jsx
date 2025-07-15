"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8 text-lg font-medium">
      {["home", "about", "work", "contact"].map((item) => (
        <li key={item}>
          <a
            className="relative text-neutral-300 transition duration-300 ease-in-out hover:text-white
                       after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                       after:w-0 after:bg-white after:transition-all after:duration-300
                       hover:after:w-full"
            href={`#${item}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[#0d0d0d]/60 shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:py-4 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-1.5 text-2xl font-bold text-white tracking-wide"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          Vishal
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <Navigation />
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none transition-transform duration-300"
        >
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-6 relative"
          >
            <motion.span
              className="absolute h-[2px] w-full bg-white"
              variants={{
                open: { rotate: 45, y: 6 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute h-[2px] w-full bg-white"
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              style={{ top: 6 }}
            />
            <motion.span
              className="absolute h-[2px] w-full bg-white"
              variants={{
                open: { rotate: -45, y: -6 },
                closed: { rotate: 0, y: 12 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="sm:hidden bg-[#111]/0 px-4 py-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Navigation />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
