import React from 'react';
import todo from "../assets/todo.png";
import calculator from "../assets/calcu.png";
import shopic from "../assets/shopic1.png";
import olx from "../assets/olx1.png";

function Project() {
    const projects = [
        { img: todo, title: "TO-DO LIST", desc: "A To-Do List using JavaScript is a simple task manager that lets users add, complete, and delete tasks. Built with HTML, CSS, and JavaScript, it's a great project for learning DOM manipulation and event handling.", shadow: "   shadow-pink-500" },
        { img: calculator, title: "CALCULATOR", desc: "A Calculator built using JavaScript allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. Built with HTML, CSS, and JavaScript, this project enhances knowledge of event handling and DOM manipulation.", shadow: "shadow-cyan-500" },
        { img: shopic, title: "SHOPIC", desc: "Shopic is a modern e-commerce platform built with HTML, Tailwind CSS, and JavaScript, offering a seamless and responsive shopping experience with dynamic product listings, a wishlist, cart system, and secure checkout.", shadow: "shadow-pink-500" },
        { img: olx, title: "OLX", desc: "An OLX-like platform enabling users to post and browse classified ads. Built using React, Tailwind CSS, and JavaScript, it ensures dynamic listings, authentication, and smooth user interactions.", shadow: "shadow-cyan-500" }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className={`shadow-[0px_0px_10px_5px]  ${project.shadow} rounded-2xl p-5 max-w-xs text-center transition transform hover:scale-105 duration-300`}>
                        <img src={project.img} alt={project.title} className="w-3/4 h-32 object-cover rounded-lg mb-4 mx-auto" />
                        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-600 text-sm mb-4 text-justify px-2">{project.desc}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
