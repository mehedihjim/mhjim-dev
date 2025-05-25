import Link from "next/link";
import React from "react";
import CVButton from "./CVButton";

const Banner = () => {
  return (
    <section className="pt-12 pb-36 px-4 md:px-16 flex flex-col">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[48px] leading-[100%] tracking-tight md:text-[120px] lg:text-[180px] xl:text-[227px]">
            Mehedi H. Jim
          </h1>
          <h4 className="mt-6 text-[28px] text-gray-500 leading-[110%] tracking-tight md:text-[60px] lg:text-[90px] xl:text-[120px]">
            MERN Stack Developer~
          </h4>
          <div className="flex flex-col gap-6 mt-4 md:mt-[54px]">
            <p className="text-base md:text-lg max-w-[90%] md:max-w-[471px] text-gray-700">
              I'm a passionate MERN Stack Developer focused on building fast,
              responsive, and scalable web applications.
            </p>
            <CVButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
