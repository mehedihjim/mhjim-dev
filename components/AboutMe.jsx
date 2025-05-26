import Image from "next/image";
import React from "react";
import imageSrc from "@/public/mhjim.png";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="relative pt-[160px] pb-[45px] bg-fixed bg-center bg-cover bg-[url('/aboutme-bg.jpg')]">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white px-4 w-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt="About Me Image"
              className="rounded-full object-cover border-4 border-white"
            />
            <div className="w-full md:w-1/2 text-left md:text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">~Hi There</h2>
              <p className="text-lg md:text-xl mb-4">
                I'm a developer who enjoys building clean, responsive, and
                user-friendly web apps.
              </p>
              <p className="text-lg md:text-xl mb-4">
                When I’m not coding, I’m likely reading comics, making music, or
                playing games.
              </p>
              <p className="text-lg md:text-xl font-bold">
                Curious?{" "}
                <span className="font-normal">
                  Hit the button below to learn more about me.
                </span>
              </p>

              {/* Button aligned right on md+, centered on mobile */}
              <div className="flex justify-center md:justify-end mt-6">
                <Link
                  href="/about"
                  className="group relative flex gap-1.5 px-8 py-4 bg-white bg-opacity-80 text-black rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
                >
                  <FaInfoCircle className="my-auto" />
                  Learn More About Me
                  <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
                    Checkout
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
