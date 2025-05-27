"use client";

import React from "react";

const TextSlider = () => {
  return (
    <div className="overflow-hidden py-[21px] md:py-12 bg-black">
      <div className="flex animate-slide whitespace-nowrap text-white leading-[110%] tracking-[-0.02em] text-[40px] sm:text-[60px] md:text-[100px] lg:text-[140px]">
        <span className="px-4 sm:px-6 md:px-8">
          Think like a hacker, build like a dev. Think like a hacker, build like
          a dev.
        </span>
        <span className="px-4 sm:px-6 md:px-8">
          Think like a hacker, build like a dev. Think like a hacker, build like
          a dev.
        </span>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 15s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-slide {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

export default TextSlider;
