"use client";

const Expertise = () => {
  return (
    <div className="mt-[60px] md:mt-[100px] lg:mt-[140px]">
      <div className="container mx-auto px-4 md:px-0 pb-12 md:pb-16 lg:pb-[75px]">
        <h2 className="text-5xl font-medium leading-[120%] tracking-[-1%] pb-[14px] md:pb-[20px] lg:pb-[45px]">
          Skills & Expertise~
        </h2>
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 max-w-7xl mx-auto">
          {/* Sills and Expertise Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 md:py-5 lg:py-10">
            <h3 className="text-xl md:text-2xl font-semibold my-auto">
              Technologies-
            </h3>
            <ul className="flex max-w-full md:max-w-[600px] gap-2 md:gap-4 flex-wrap justify-start md:justify-center">
              <li className="w-fit px-4 py-3 border">HTML5</li>
              <li className="w-fit px-4 py-3 border">CSS3 (Responsive)</li>
              <li className="w-fit px-4 py-3 border">JavaScript</li>
              <li className="w-fit px-4 py-3 border">ReactJs</li>
              <li className="w-fit px-4 py-3 border">React Redux Toolkit</li>
              <li className="w-fit px-4 py-3 border">NextJs</li>
              <li className="w-fit px-4 py-3 border">Tailwind CSS</li>
              <li className="w-fit px-4 py-3 border">Component libraries</li>
              <li className="w-fit px-4 py-3 border">RestApi & ContextApi</li>
              <li className="w-fit px-4 py-3 border">CMS (WordPress)</li>
              <li className="w-fit px-4 py-3 border">Linux</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 md:py-5 lg:py-10">
            <h3 className="text-xl md:text-2xl font-semibold my-auto">
              Tools-
            </h3>
            <ul className="flex max-w-full md:max-w-[600px] gap-2 md:gap-4 flex-wrap justify-start md:justify-center">
              <li className="w-fit px-4 py-3 border">Git & Github</li>
              <li className="w-fit px-4 py-3 border">Vercel</li>
              <li className="w-fit px-4 py-3 border">Figma</li>
              <li className="w-fit px-4 py-3 border">VSCode</li>
              <li className="w-fit px-4 py-3 border">Google Docs</li>
              <li className="w-fit px-4 py-3 border">Notion</li>
              <li className="w-fit px-4 py-3 border">chatGPT</li>
              <li className="w-fit px-4 py-3 border">daily.dev</li>
              <li className="w-fit px-4 py-3 border">Adobe Photoshop</li>
              <li className="w-fit px-4 py-3 border">Canva</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
