import React, { useState } from "react";
import logoImg from "../assets/stockholmcleanhb.se.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Mobile menu open/close karne ki state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LOGO CONTAINER */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-30 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                src={logoImg}
                alt="Stockholm Clean HB"
              />
            </a>
          </div>

          {/* DESKTOP NAVIGATION LINKS & ACTION BUTTON */}
          <div className="flex items-center gap-10">
            
            {/* Main Links Menu (Hidden on mobile, flex on desktop) */}
            <div className="hidden md:flex items-center gap-8">
            
              <Link       className="text-sm font-bold tracking-wider uppercase text-blue-950 hover:text-amber-500 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full" to={'/'}>Hem</Link>
            
              <Link  className="text-sm font-bold tracking-wider uppercase text-blue-950 hover:text-amber-500 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full" to={'/About'}>Om oss</Link>

           
                <Link className="text-sm font-bold tracking-wider uppercase text-blue-950 hover:text-amber-500 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full" to={'/Services'}>Våra tjänster</Link>
           
              <Link  className="text-sm font-bold tracking-wider uppercase text-blue-950 hover:text-amber-500 relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full" to={'/contact'}>Kontakta oss</Link>

            </div>

            {/* Premium Conversion CTA Button (Desktop only) */}
            <div className="hidden sm:block">
              <a
                href="/contact"
                className="inline-block px-5 py-2.5 bg-[#0D2B5C] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 hover:shadow-md transition-all duration-300 border border-transparent hover:border-amber-500"
              >
                Få gratis offert
              </a>
            </div>

            {/* HAMBURGER TRIGGER BUTTON (Visible only on Mobile/Tablet) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <span
                className={`block w-6 h-0.5 bg-blue-950 transition-all duration-300 ease-in-out ${
                  isOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-blue-950 transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-blue-950 transition-all duration-300 ease-in-out ${
                  isOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN SCREEN COVER */}
      <div
        className={`fixed top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen visible" : "opacity-0 max-h-0 invisible"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 font-bold text-base text-blue-950 tracking-wider uppercase">
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors duration-200 border-b border-slate-100 pb-3"
            href="/"
          >
            Home
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors duration-200 border-b border-slate-100 pb-3"
            href="/about"
          >
            About
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors duration-200 border-b border-slate-100 pb-3"
            href="/services"
          >
            Services
          </a>
          <a
            onClick={() => setIsOpen(false)}
            className="hover:text-amber-500 transition-colors duration-200 pb-1"
            href="/contact"
          >
            Contact
          </a>
          
          {/* CTA Button inside Mobile Menu */}
          <a
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="mt-4 w-full text-center py-4 bg-[#0D2B5C] text-white font-extrabold text-sm rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-200"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
