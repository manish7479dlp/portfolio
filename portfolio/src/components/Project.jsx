import React from "react";

const imgLink =
  "https://img.freepik.com/free-photo/people-sitting-bench-forest-night-generative-ai_260559-472.jpg?w=360&t=st=1703851201~exp=1703851801~hmac=d456f2b9bdbef6c9c5da80a53dee6ad42bdfa2819a77986d1ef80dbb2c5cb426";
const Project = () => {
  return (
    <div className="mt-8 " >
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-slate-600 text-4xl font-bold">My Projects</h1>
        <div className="w-32 border border-cyan-500 mt-3 rounded-md"></div>
      </div>
      <div className="flex flex-wrap justify-evenly py-8">
        <EachProject />
        <EachProject />
        <EachProject />
      </div>
    </div>
  );
};

const EachProject = () => {
  return (
    <div className="w-80 h-96 border border-white rounded-lg bg-slate-800 overflow-hidden shadow mx-3 my-3">
      <div className="h-56">
        <img className="h-full w-full" src={imgLink} alt="project-img" />
      </div>
      <div className="p-2  text-slate-300 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          consectetur obcaecati dicta iusto cumque inventore iste facilis sunt
          maxime.
        </p>
        <div className="mt-3">
          <a
            className="bg-cyan-500 px-4 py-1 text-slate-900 font-bold rounded-xl cursor-pointer duration-100 ease-in-out transition-all  hover:bg-gradient-to-r from-cyan-300 to-cyan-800 hover:text-white"
            href="#"
            target="_blank"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
