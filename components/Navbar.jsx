"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // mobile nav drawer function
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="hidden md:block gap-4 bg-black rounded-4xl w-fit mx-auto mt-8 text-white font-normal text-xl p-1.5">
        <ul className="flex my-auto">
          <li className="">
            <Link
              href="/"
              className={`px-4 py-2 rounded-3xl transition block ${
                pathname === "/"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              href="/projects"
              className={`px-4 py-2 rounded-3xl transition block ${
                pathname === "/projects"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="px-2 py-0.5 -top-1 bg-gray-500 text-white text-xs rounded-full mr-1">
                2
              </span>
              Projects
            </Link>
          </li>
          <li className="">
            <Link
              href="/about"
              className={`px-4 py-2 rounded-3xl transition block ${
                pathname === "/about"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-3xl transition block ${
                pathname === "/contact"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* ==============
          Mobile Navbar
          ============== */}
      <nav className="w-full flex justify-between gap-4 md:hidden rounded-4xl mx-auto my-4 py-2.5 font-normal text-xl p-1.5 relative">
        <Link
          href="/"
          className="font-bold text-black text-[32px] text-center my-auto"
        >
          MH Jim©
        </Link>

        <button
          onClick={toggleNavDrawer}
          className="my-auto w-10 h-10 rounded-full bg-black text-white flex items-center justify-center cursor-pointer z-50"
          aria-label="Toggle Menu"
        >
          <HiOutlineMenu />
        </button>

        {/* Backdrop */}
        {navDrawerOpen && (
          <div
            onClick={() => setNavDrawerOpen(false)}
            className="fixed inset-0 bg-gray-950/30 bg-opacity-40 z-40"
          />
        )}

        {/* Sliding Drawer */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-50
      w-[90vw]
      ${navDrawerOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
          <button
            className="cursor-pointer absolute top-4 right-4"
            onClick={toggleNavDrawer}
          >
            <IoMdCloseCircle />
          </button>
          <ul className="flex flex-col space-y-4 text-white mt-14 font-normal text-sm">
            <li>
              <Link
                href="/"
                className={`block px-2 pt-1 pb-2 text-black transition ${
                  pathname === "/"
                    ? "border-b border-gray-300 w-full text-gray-800"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setNavDrawerOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block px-2 pt-1 pb-2 text-black transition ${
                  pathname === "/projects"
                    ? "border-b border-gray-300 w-full text-gray-800"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setNavDrawerOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block px-2 pt-1 pb-2 text-black transition ${
                  pathname === "/about"
                    ? "border-b border-gray-300 w-full text-gray-800"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setNavDrawerOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block px-2 pt-1 pb-2 text-black transition ${
                  pathname === "/contact"
                    ? "border-b border-gray-300 w-full text-gray-800"
                    : "hover:bg-white/10"
                }`}
                onClick={() => setNavDrawerOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
