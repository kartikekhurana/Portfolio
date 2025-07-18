import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-[#0a0a0a] text-gray-400 py-10 px-6 md:px-16 border-t border-white/10'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
        <div className='text-sm md:text-base text-white font-semibold'>
          © 2025 Kartike Khurana
        </div>
        <div className='flex gap-6 text-sm cursor-pointer'>
          <Link
            to='about'
            smooth={scroll}
            duration={500}
            className='hover:text-orange-400 transition-all'>
            About
          </Link>
          <Link
            to='projects'
            duration={500}
            smooth={scroll}
            className='hover:text-blue-400 transition-all'>
            Projects
          </Link>
          <Link
            to='contact'
            duration={500}
            smooth={scroll}
            className='hover:text-yellow-400 transition-all'>
            Contact
          </Link>
        </div>
        <div className='flex gap-4 text-xl'>
          <a
            href='https://github.com/kartikekhurana'
            className='hover:text-white hover:scale-110 transition-all'>
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/kartike-khurana/'
            className='hover:text-blue-400 hover:scale-110 transition-all'>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
