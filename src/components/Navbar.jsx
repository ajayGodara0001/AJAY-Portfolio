import React, { useContext } from 'react';
import { Menu } from 'lucide-react';
import { AppContext } from '../context/AppContext';
const Navbar = () => {

    const  { isOpen, setIsOpen } = useContext(AppContext)

  return (
    <nav className="fixed w-full top-0 z-10 font-bold text-xl bg-gray-900  text-[#E0E0E0] border-b border-gray-200 ">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16  items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a    href="#" className="hover:text-[#00FFAA] hover:border-b-2 transition ">
             AJAY
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10">
            <a href="#" className="hover:text-[#00FFAA]  transition ">
              Home
            </a>
            <a href="#about" className="hover:text-[#00FFAA]  transition ">
              About
            </a>
            <a href="#projects" className="hover:text-[#00FFAA] transition ">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#00FFAA] transition ">
              Contact
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E0E0E0] hover:text-[#00FFAA] cursor-pointer"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 px-2 pt-2 pb-3 space-y-1">
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#"
              className="block px-3 py-2 text-[#E0E0E0] hover:bg-[#333333]  hover:rounded-lg hover:text-[#00FFAA] transition"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#about"
              className="block px-3 py-2 text-[#E0E0E0] hover:bg-[#333333]  hover:rounded-lg hover:text-[#00FFAA] transition"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#projects"
              className="block px-3 py-2 text-[#E0E0E0] hover:bg-[#333333]  hover:rounded-lg hover:text-[#00FFAA] transition"
            >
              Projects
            </a>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#contact"
              className="block px-3 py-2 text-[#E0E0E0] hover:bg-[#333333]  hover:rounded-lg hover:text-[#00FFAA] transition"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;