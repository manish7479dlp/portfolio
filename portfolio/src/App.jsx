import React from "react";
import { Navbar, Home, Project, Skills, Education, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-slate-900 w-full flex flex-col justify-center items-center ">
      <div className="md:w-5/6  w-full">
        <Navbar />
        <Home />
        <Project />
        {/* <Skills/> */}
        <Education/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
