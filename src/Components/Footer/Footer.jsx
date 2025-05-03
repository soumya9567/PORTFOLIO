import React from "react";
import { Instagram, Github, Atom } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center flex justify-between items-center px-6 font-redhat text-lg">
      <span>Designed & Developed by soumyaammu1917@gmail.com</span>
      <span>Copyright © {new Date().getFullYear()}</span>
      <div className="flex items-center gap-2"> 
        <Atom className="text-blue-400" />
        <Instagram className="text-pink-500" />
        <Github className="text-gray-400" />
      </div>
    </footer>
  );
};

export default Footer;
