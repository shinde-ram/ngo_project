import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/list', label: 'Lists' },
    { href: '/events', label: 'Events' },
    { href: '/about', label: 'About Us' },
    { href: '/impact', label: 'Our Impact' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className="fixed top-0 left-0 w-[15%] bg-blue-950 text-white flex flex-col justify-between p-4 h-screen">
      <div>
        {/* Logo */}
        {/* <hr className="border-0 h-[4px] w-2/3 mx-auto bg-gradient-to-r from-white to-yellow-500 " /> */}
        <div className="flex items-center my-4 justify-center">
          <img src="./images/logo3.png" alt="logo" className="w-[40%]" />

        </div>
        <hr className="border-0 h-[1px] w-full bg-white " />

        {/* Navigation Links */}
        <nav className="flex flex-col justify-evenly  text-xl font-medium mt-10  ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative ${
                  pathname === link.href
                    ? 'text-yellow-400 font-bold'
                    : 'hover:text-yellow-400'
                } transition duration-300 ease-in-out transform  hover:scale-105 p-[10%] border-b-2 border-b-pink-800 hover:bg-blue-900 text-center `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
