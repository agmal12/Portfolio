import { useState } from 'react';
import {motion} from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            agmal
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div className="sm:hidden mt-2 overflow-hidden text-center pb-5"
          initial={{opacity:0, x: -10}}
          animate={{opacity:1, x:0}}
          style={{maxHeight:"100vh"}}
          transition={{duration:1}}
          >
            <Navigation />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
