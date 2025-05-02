import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically gets 2025

  return (
    <footer className="bg-gradient-to-b from-[#1A1A1A] to-[#0F172A] text-[#D1D5DB] border-t-1 py-12 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#00FFAA] mb-4">
              Ajay Godara
            </h3>
            <p className="text-[#A0A0A0] text-sm">
              MERN Stack Developer crafting dynamic and scalable web solutions.
              Let’s build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#00FFAA] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links with Lucide Icons */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold text-[#00FFAA] mb-4">
              Connect With Me
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/ajaygodara0001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-2 text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ajaygodara81/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-2 text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/@AjayGodara_12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-end gap-2 text-[#E0E0E0] hover:text-[#00FFAA] transition-colors"
                >
                  <Twitter size={20} />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#2A2A2A] pt-6 text-center">
          <p className="text-[#A0A0A0] text-sm">
            &copy; {currentYear} Ajay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
