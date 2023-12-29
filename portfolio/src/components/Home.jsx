import React from "react";
import NavBar from "./Navbar";
import ContackLink from "./ContackLink";

const Home = () => {
  return (
    <div className="sm:h-[80vh] mt-8 sm:mt-0 text-white flex flex-col sm:flex-row justify-center items-center ">
      <div className="sm:w-4/6 ">
        <LeftContent />
      </div>
      <div className="sm:w-3/6  flex justify-center mt-8 sm:mt-0">
        <RightContent/>
      </div>
    </div>
  );
};

const LeftContent = () => {
  return (
    <div className="px-5">
      <h3 className="text-2xl md:text-4xl font-semibold text-white">Hello, It's Me</h3>
      <h2 className=" text-4xl md:text-7xl font-bold text-white mb-2">Manish Kumar</h2>
      <h3 className="text-2xl md:text-3xl  font-semibold text-white">
        And I'm a{" "}
        <span className="font-bold text-cyan-600">MERN Stack Developer</span>
      </h3>

      <p className="my-4 text-sm  text-slate-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius magni
        enim cum veniam nesciunt, fugiat rerum esse. Tempora, veritatis omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos pariatur fugit beatae adipisci eius iste voluptatum fuga sit vitae nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus laborum deserunt cumque reprehenderit officiis sapiente nesciunt, ab assumenda maxime?
      </p>

      <ContackLink />
      <ResumeBtn />
    </div>
  );
};

const ResumeBtn = () => {
  return (
    <div className="mt-8">
      <a
        className="px-4 py-2  bg-gradient-to-r from-slate-300 to-slate-700 text-slate-950 font-bold rounded-md cursor-pointer transition-all duration-400 ease-in-out hover:bg-gradient-to-r hover:to-slate-400 hover:from-slate-700 "
        href="#"
        target="_blank"
      >
        Download Resume
      </a>
    </div>
  );
};


const RightContent = () => {
  return (
    <div className="h-72 w-72 rounded-[50%] overflow-hidden shadow-inner">
      <img src="https://igimages.gumlet.io/telugu/gallery/actor/nikhil/nikhil22122022_012.jpg?w=600&dpr=1.3" alt="hero-banner"/>
    </div>
  )
}

export default Home;
