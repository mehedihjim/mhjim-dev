import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import TextSlider from "@/components/TextSlider";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner />
      <TextSlider />
      <AboutMe />
      <Expertise />
      <Projects />
    </div>
  );
};

export default page;
