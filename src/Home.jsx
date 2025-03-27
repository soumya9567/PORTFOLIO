import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Type from './Components/Type';
import profile from "./assets/profile.png";
import "./style.css"; // Import external CSS file
import Intro from './Components/Intro';
import Find from './Components/Find';
import Project from './Components/Project';

function Home() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white">
            <Navbar />

            <div className="flex flex-col md:flex-row justify-between items-center min-h-screen px-6 md:px-16 lg:px-24">
                
                <div className="flex-1 text-left animate-slide-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl p-2">Hello 👋 </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-cyan-400 font-bold">
                        I'm SOUMYA SATHYAN
                    </h1>

                    <div className="mt-4 text-2xl md:text-4xl lg:text-5xl text-cyan-300">
                        <Type />
                    </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-end animate-slide-right">
                    <img 
                        src={profile} 
                        alt="Profile" 
                        className="w-48 md:w-64 lg:w-80 xl:w-96 rounded-full shadow-[0px_0px_30px_5px] shadow-pink-500 animate-float"
                    />
                </div>
            </div>
           <Intro />
           <Find />
           <Project />

        </div>
    );
}

export default Home;
