import React, { useState, useEffect } from "react";

function Navbar() {
    const [expand, setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setNavColour(window.scrollY >= 20);
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <div className={`sticky top-0 z-50 w-full ${navColour ? "bg-black bg-opacity-50 backdrop-blur-md" : "bg-transparent"}`}>
            <div className="flex justify-between items-center h-16 px-6 text-white shadow-md">
                
                <div>
                    <h1 className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                        SOUMYA.
                    </h1>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setExpand(!expand)} className="text-2xl">
                        {expand ? "✖" : "☰"}
                    </button>
                </div>

               <div className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center md:space-x-6 text-lg transition-all duration-300 ${expand ? "block" : "hidden"} md:flex`}>
                    <div className="hover:text-pink-500 transition duration-300 cursor-pointer p-3 md:p-0">HOME</div>
                    <div className="hover:text-pink-500 transition duration-300 cursor-pointer p-3 md:p-0">ABOUT</div>
                    <div className="hover:text-pink-500 transition duration-300 cursor-pointer p-3 md:p-0">CONTACT</div>
                    <div className="hover:text-pink-500 transition duration-300 cursor-pointer p-3 md:p-0">PROJECT</div>

                    <button className="mt-4 md:mt-0 bg-blue-500 w-28 h-9 rounded-lg hover:bg-pink-600 transition duration-300">
                        RESUME
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
