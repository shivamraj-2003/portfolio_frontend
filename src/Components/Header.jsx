import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "experience" },
    { id: 5, link: "achievements" },
    { id: 6, link: "project" },
    { id: 7, link: "certificates" },
    { id: 8, link: "contact" },
  ];

  const [actionButton, setActionButton] = useState({
    title: "Download Resume",
    link: "/Shivamraj_cv.pdf",
  });

  return (
    <div
      className="fixed top-0 z-50 h-20 w-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 justify-between bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm"
    >
      <div>
        <h1 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Shivam Raj
        </h1>
      </div>
      
      <ul className="hidden md:flex items-center space-x-2">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-gray-600 hover:text-orange-600 transition-colors duration-300"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center">
        <a
          href={actionButton.link}
          className="px-6 py-2.5 font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-full shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
          download
        >
          {actionButton.title}
        </a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-600 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-2xl text-gray-800 z-40 space-y-8 animate-fadeIn">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer capitalize text-3xl font-bold hover:text-orange-600 transition-colors duration-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={actionButton.link}
              className="px-10 py-4 font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-full shadow-xl shadow-orange-600/30 text-xl"
              download
              onClick={() => setNav(false)}
            >
              {actionButton.title}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
