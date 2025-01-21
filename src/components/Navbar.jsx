import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between p-5">
        {/* Logo */}
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold tracking-wider transition-transform duration-300 transform hover:scale-110">
            VENKATESH<span className="text-orange-500">.</span>
          </h4>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-transparent"
          } text-gray-900 md:flex hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-orange-500">
                <Link to={menu.link} smooth={true} duration={500}>
                  {menu.name}
                </Link>
              </li>
            ))}
            {/* Resume Button */}
            <li>
              <a
                href="https://drive.google.com/file/d/1qUXS_A0jIsu2ny0lPqhPz0-f4IMW2Thi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md shadow-md transition-transform duration-300 hover:bg-orange-600 hover:scale-105"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] text-2xl sm:text-7xl md:hidden m-5 ${
    open ? "text-gray-900" : "text-white"
  }`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-gray-900 absolute w-4/5 h-screen px-5 py-4 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-6 py-2 text-base">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="hover:text-orange-500"
              >
                <Link to={menu.link} smooth={true} duration={500}>
                  {menu.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1qUXS_A0jIsu2ny0lPqhPz0-f4IMW2Thi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-center text-sm font-semibold text-white bg-orange-500 rounded-md shadow-md transition-transform duration-300 hover:bg-orange-600 hover:scale-105"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
