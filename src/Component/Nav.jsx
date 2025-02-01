import React, { useEffect, useState } from 'react';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2'
import { X } from 'lucide-react';
const Nav = () => {
  const [animate, setAnimate] = useState(false);
const [Hamburger, setHamburger] = useState(true)

const ToggalHamburger = () => {
  if (Hamburger) {
    setHamburger(false)
  }else{
    setHamburger(true)
  }
}

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <nav className="flex md:p-7 p-4 pb-4 z-10 relative items-center justify-between md:pb-10  bg-black  backdrop-blur-lg shadow-md">
      <h1 className={`text-white lg:text-3xl text-[1.3rem] md:text-2xl transition-transform duration-1000 ${animate ? 'transform translate-x-16' : ''}`}>
        {"< 𝓡𝓪𝓷𝓪𝓫𝓲𝓻 𝓢𝓮𝓽𝓱 />"}
      </h1>
      <ul className="hidden  text-xl gap-10 mr-4 md:visible md:flex  ">
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Home</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">About</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">projects</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Contat</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Resume</li>
      </ul>
    <div onClick={ToggalHamburger} className='md:hidden visible absolute invert z-30 ml-[80%] ' ><UseAnimations  size={35} animation={menu2} /></div>
    </nav>
    <div   className={`bg-black list-none pt-10 p-5 bg-opacity-70 backdrop-blur-lg shadow-md w-[60%] h-[60vh] z-20 md:hidden m-0 -mt-[5rem] left-[39%] absolute ${Hamburger ? 'hidden' : 'visible'}`}>
      <div onClick={ToggalHamburger} className='flex justify-end'>
      <X color='white' className=' '/>

      </div>
    <li className=" mt-5 p-2 text-white cursor-pointer hover:text-pink-400 transition duration-300">Home</li>
    <hr />
        <li className=" p-2 text-white cursor-pointer hover:text-pink-400 transition duration-300">About</li>
        <hr />
        <li className=" p-2 text-white cursor-pointer hover:text-pink-400 transition duration-300">Project</li>
        <hr />
        <li className=" p-2 text-white cursor-pointer hover:text-pink-400 transition duration-300">Contact</li>  
        <hr />    
        <li className=" p-2 text-white cursor-pointer hover:text-pink-400 transition duration-300">Resume</li>
    </div>
    </>
  );
};

export default Nav;
