import React from "react";
import { Instagram, Github, Atom } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 font-redhat text-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        {/* Contact Info */}
        <span className="text-sm sm:text-base">
          Designed & Developed by soumyaammu1917@gmail.com
        </span>

        {/* Copyright */}
        <span className="text-sm sm:text-base">
          Copyright © {new Date().getFullYear()}
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <Atom className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
          <Instagram className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6" />
          <Github className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
