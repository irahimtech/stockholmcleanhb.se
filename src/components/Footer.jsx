import React from "react";
import logoImg from "../assets/stockholmcleanhb.se.png";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // Light variant background taakay aapka blue aur gray logo perfectly visible ho
    <footer className="bg-slate-200 text-gray-600 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* SECTION 1: Logo & Contact Us Heading with 2-Column Social Grid */}
        <div className="space-y-5 ">
          <div>
            {/* Contact Us Heading (Dark Text for Light Mode) */}
            <h4 className="text-blue-950  text-base font-bold uppercase ml-1 mb-4 tracking-wider mb-3">
              Kontakta oss
            </h4>

            {/* Professional 2-Column Grid Layout for Socials */}
            <div className="grid grid-cols-2 gap-3 text-xs mt-4">
              <a
                href="https://facebook.com/stockholmcleanhb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-blue-600 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300">
                <FaFacebookF className="text-blue-500" />{" "}
                <span className="font-medium text-slate-700">Facebook</span>
              </a>
              <a
                href="https://instagram.com/stockholmcleanhb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-pink-600 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300">
                <FaInstagram className="text-pink-500" />{" "}
                <span className="font-medium text-slate-700">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@stockholmcleanhb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-black hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300">
                <FaTiktok className="text-slate-800" />{" "}
                <span className="font-medium text-slate-700">TikTok</span>
              </a>
              <a
                href="https://twitter.com/stockholmcleanhb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-neutral-900 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300">
                <FaXTwitter className="text-slate-800" />{" "}
                <span className="font-medium text-slate-700">Twitter</span>
              </a>
              <a
                href="https://www.youtube.com/@stockholmcleanhb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-red-600 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300">
                <FaYoutube className="text-red-500" />{" "}
                <span className="font-medium text-slate-700">YouTube</span>
              </a>
              <a
                href="https://maps.app.goo.gl/KJFdcsEpTCtJZjAFA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-amber-500 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300">
                <FaGoogle className="text-amber-500 hover:text-white" />{" "}
                <span className="font-medium text-slate-700">Google</span>
              </a>

            </div>
          </div>
        </div>
        {/* SECTION 2: Navigation Links */}
        <div>
          <h3 className="text-blue-950 font-bold text-base mb-4 tracking-wide uppercase">
            Navigering
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a
                href="/"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Hem
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Om oss
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Våra tjänster
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Kontakta oss
              </a>
            </li>
          </ul>
        </div>

        {/* SECTION 3: Our Services */}
        <div>
          <h3 className="text-blue-950 font-bold text-base mb-4 tracking-wide uppercase">
            Våra tjänster
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a
                href="/services"
                className="text-blue-950 font-bold flex items-center gap-2 transition-colors duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Akutstädning dygnet runt
              </a>
            </li>
            <li className="text-slate-500">Hemstädning</li>
            <li className="text-slate-500">Flyttstädning</li>
            <li className="text-slate-500"> Kontorsstädning</li>
          </ul>
        </div>

        {/* SECTION 4: Policies & Legal */}
        <div>
          <h3 className="text-blue-950 font-bold text-base mb-4 tracking-wide uppercase">
            Policy och juridik
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a
                href="/terms"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Användarvillkor
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Integritetspolicy
              </a>
            </li>
            <li>
              <a
                href="/return-policy"
                className="text-slate-600 hover:text-blue-950 hover:underline transition-colors duration-200"
              >
                Retur- och återbetalningspolicy
              </a>
            </li>
            <li className="pt-2">
              {/* Premium matching tag container */}
              <span className="text-xs bg-[#0D2B5C] text-white px-2.5 py-1 rounded font-medium inline-block mt-1 shadow-sm">
                 30% rabatt tillgänglig
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t-2 border-blue-950 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
        <p className="px-10">
          © {new Date().getFullYear()} 2026 Stockholm Clean. Med ensamrätt.
        </p>
        <div className="flex px-10 gap-4">
          <span className="text-slate-400">Org.nr: 969804-5573</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
