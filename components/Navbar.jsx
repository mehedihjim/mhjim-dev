"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default Navbar;
