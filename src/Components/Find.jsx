import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin } from 'lucide-react';

function Find() {
 

  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[20vh] space-y-3">

      <h1 className="text-3xl font-bold">FIND ME ON</h1>
      <span className="text-lg text-grey-400">Feel free to connect with me</span>

    
      <div className="flex space-x-8 mt-3">
   
        <Link to={'https://github.com/soumya9567'}>
          <div className="p-3 rounded-full bg-white shadow-[0px_0px_10px_5px] shadow-cyan-500 hover:shadow-pink-500 transition duration-300 cursor-pointer">
            <Github className="text-black w-6 h-6" />
          </div>
        </Link>

      
        <Link to={'https://www.linkedin.com/in/soumya-sathyan-b09ab22a8'}>
          <div className="p-3 rounded-full bg-white shadow-[0px_0px_10px_5px] shadow-cyan-500 hover:shadow-pink-500 transition duration-300 cursor-pointer">
            <Linkedin className="text-black w-6 h-6" />
          </div>
        </Link>

      
        <Link to={''}>
          <div className="p-3 rounded-full bg-white shadow-[0px_0px_10px_5px] shadow-cyan-500 hover:shadow-pink-500 transition duration-300 cursor-pointer">
            <Instagram className="text-black w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Find;
