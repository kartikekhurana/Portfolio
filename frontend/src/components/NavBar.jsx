import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={`fixed top-0 pb-32 left-0 w-full z-50 transition-transform duration-300 animate-bounce-slow ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className='max-w-7xl mx-auto px-6 py-3 flex justify-center items-center'>
        <ul className='flex space-x-16 text-white font-semibold text-base'>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              offset={-60}
              className='hover:text-blue-400 cursor-pointer transition-colors'>
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              offset={-60}
              className='hover:text-orange-400 cursor-pointer transition-colors'>
              About
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              offset={-60}
              className='hover:text-orange-400 cursor-pointer transition-colors'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
