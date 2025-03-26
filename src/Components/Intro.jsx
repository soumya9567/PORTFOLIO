import React, { useEffect, useState, useRef } from "react";
import intro from "../assets/intro.png";

function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 text-lg"
    >
   
      <div
        className={`flex-1 text-center md:text-left transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
 
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mb-6">
          LET ME{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent   bg-clip-text">
            INTRODUCE
          </span>{" "}
          MYSELF
        </h1>

        <div className="max-w-2xl space-y-4">
          <p>
            I am a{" "}
            <span className="text-cyan-500 font-semibold">
              professional and enthusiastic MERN Stack Developer
            </span>{" "}
            in my daily life. I am a quick learner with a self-learning
            attitude. I love to learn and explore new technologies and am
            passionate about problem-solving. I enjoy working across all stacks
            of web application development, making the web more open and
            accessible to the world.
          </p>

          <p>
            My core skill is based on{" "}
            <span className="text-yellow-400 font-semibold">JavaScript</span>,
            and I love building things with
            <span className="text-green-400 font-semibold"> MongoDB</span>,
            <span className="text-blue-400 font-semibold"> Express.js</span>,
            <span className="text-cyan-400 font-semibold"> React</span>, and
            <span className="text-gray-400 font-semibold"> Node.js</span>. I am
            always eager to take on new challenges and continuously improve my
            skills.
          </p>

          <p className="font-semibold text-pink-400">
            I am available for any job opportunity that aligns with my
            expertise and interests.
          </p>
        </div>
      </div>


      <div
        className={`flex-1 flex justify-center transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <img
          src={intro}
          alt="Introduction"
          className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-[0px_0px_30px_5px] shadow-pink-500"
        />
      </div>
    </div>
  );
}

export default Intro;
