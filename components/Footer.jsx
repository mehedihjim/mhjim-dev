import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="py-10 md:pt-[130px] lg:pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[48px] md:text-[100px] lg:text-[140px] font-medium leading-none tracking-tight mb-10 md:mb-12">
            Let's Talk
          </h2>

          <a
            href="mailto:mhjim.info@gmail.com"
            className="group relative flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-black bg-opacity-80 text-white rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md mb-24"
          >
            mhjim.info@gmail.com
            <GoArrowUpRight className="text-xl" />
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-3 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap text-sm">
              Let's Talk~
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
          <p className="text-center md:text-left">2025 © — Made by MH Jim</p>
          <ul className="flex flex-wrap justify-center md:justify-end gap-4">
            <li>
              <a
                href="https://github.com/mehedihjim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mehedi-h-jim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/me.mhjim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Eng_Jim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
