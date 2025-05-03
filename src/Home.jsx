import React, { useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Type from './Components/Type';
import profile from "./assets/profile.png";
import "./style.css";
import Intro from './Components/Intro';
import Find from './Components/Find';
import Project from './Components/Project';
import Footer from './Components/Footer/Footer';

function Home() {
    const introRef = useRef(null);
    const findRef = useRef(null);
    const projectRef = useRef(null);  

    const scrollToIntro = () => {
        introRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFind = () => {
        findRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative w-full min-h-screen bg-black text-white">
            <Navbar 
                scrollToIntro={scrollToIntro} 
                scrollToFind={scrollToFind} 
                scrollToProject={scrollToProject} 
            />

            <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen px-6 md:px-16 lg:px-24 gap-10 pt-12">
                {/* Text Section */}
                <div className="flex-1 text-center md:text-left animate-slide-left space-y-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl">Hello 👋</h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-cyan-400 font-bold">
                        I'm SOUMYA SATHYAN
                    </h1>
                    <div className="mt-4 text-2xl md:text-3xl lg:text-4xl text-cyan-300">
                        <Type />
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center animate-slide-right">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 rounded-full shadow-[0px_0px_30px_5px] shadow-pink-500 animate-float"
                    />
                </div>
            </div>

            {/* Sections */}
            <div ref={introRef}>
                <Intro />
            </div>

            <div ref={findRef}>
                <Find />
            </div>

            <div ref={projectRef}>
                <Project />
            </div>

            <Footer />
        </div>
    );
}

export default Home;
