import React, { useEffect, useState } from 'react';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2'
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
    <nav className="flex z-10 relative items-center justify-between p-10 bg-black bg-opacity-70 backdrop-blur-lg shadow-md">
      <h1 className={`text-white lg:text-3xl text-xl md:text-2xl transition-transform duration-1000 ${animate ? 'transform translate-x-16' : ''}`}>
        {"< 𝓡𝓪𝓷𝓪𝓫𝓲𝓻 𝓢𝓮𝓽𝓱 />"}
      </h1>
      <ul className="hidden  text-xl gap-10 mr-4 md:visible md:flex  ">
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Home</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">About</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Services</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Blog</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Resume</li>
      </ul>
    </nav>
    <div onClick={ToggalHamburger} className='md:hidden visible  absolute invert z-30 -mt-[4.5rem] ml-[90%] ' ><UseAnimations  size={40} animation={menu2} /></div>
    <div  className={`bg-black bg-opacity-70 backdrop-blur-lg shadow-md w-[60%] h-[50vh] z-20 md:hidden m-0 p-0 -mt-[5rem] left-[39%] absolute ${Hamburger ? 'hidden' : 'visible'}`}>
    <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Home</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">About</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Services</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Blog</li>
        <li className="text-white cursor-pointer hover:text-pink-400 transition duration-300">Resume</li>
    </div>
    </>
  );
};

export default Nav;
