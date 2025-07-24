"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

function Navigation({ closeMenu }) {
  const navItems = ["home", "about", "work", "contact"];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu?.();
    }
  };

  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8 text-lg font-medium">
      {navItems.map((item) => (
        <li key={item}>
          <button
            onClick={() => handleClick(item)}
            className="relative text-neutral-300 transition duration-300 ease-in-out cursor-pointer hover:text-white
                       after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                       after:w-0 after:bg-white after:transition-all after:duration-300
                       hover:after:w-full"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
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
        <nav className="hidden sm:flex items-center gap-6">
          <Navigation />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shitolevishal29@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-md text-sm font-semibold text-white bg-indigo-500 hover:bg-[#00ADB5]/90 transition"
            >
              Hire Me
            </a>
            <a
              href="/Vishal-Shitole-Resume-.pdf"
              download
              className="px-4 py-1.5 rounded-md text-sm font-semibold text-white border border-white hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/vishal11u"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-md text-sm font-semibold bg-white text-black border  hover:border-white hover:bg-transparent hover:text-white transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.205 11.385c.6.111.82-.258.82-.577v-2.256c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.086 1.839 1.248 1.839 1.248 1.07 1.834 2.807 1.304 3.492.996.109-.775.419-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.304-.536-1.527.117-3.182 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 016.002 0c2.292-1.553 3.298-1.23 3.298-1.23.655 1.655.243 2.878.12 3.182.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.922.43.37.814 1.096.814 2.21v3.285c0 .322.218.694.825.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </nav>

        {/* Hamburger Button */}
        <div className="flex items-center gap-4 mr-0 sm:hidden">
          <a
            href="https://github.com/vishal11u"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full -mt-0 text-sm font-semibold bg-white text-black border  hover:border-white hover:bg-transparent hover:text-white transition "
          >
            <FaGithub size={20} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none transition-transform duration-300"
          >
            <motion.div
              initial={false}
              // animate={isOpen ? "open" : "closed"}
              className="relative"
            >
              {isOpen ? <IoMdClose size={31} /> : <CgMenuRightAlt size={31} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="sm:hidden bg-[#111]/0 px-4 py-6 text-center space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Navigation />
            <a
              href="mailto:shitolevishal29@gmail.com"
              className="inline-block w-full py-2 rounded-md text-sm font-semibold text-white bg-[#00ADB5] hover:bg-[#00ADB5]/90 transition"
            >
              Hire Me
            </a>
            <a
              href="/Vishal-Shitole-Resume-.pdf"
              download
              className="inline-block w-full py-2 rounded-md text-sm font-semibold text-white border border-white hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
