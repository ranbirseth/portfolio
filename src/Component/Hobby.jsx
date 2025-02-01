import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css'
function Hobby() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Apply animation when visible
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 170, friction: 26 },
  });
  return (
    <><animated.div  ref={ref} style={animation} className='md:flex md:justify-center md:gap-20  '>
      <div className="flex gap-8 flex-wrap justify-center mt-6 py-10">
        <div className="border-2 border-white transform rounded-xl md:h-72 md:w-72 h-[12rem] w-[12rem] shadow-xl transition duration-300 hover:scale-105 relative">
          <div className="flex h-full justify-center items-center bg-black bg-opacity-50 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-70 transition-all p-6 relative overflow-hidden">
            <span className="font-bold text-white opacity-100  hover:ml-20">WEB DEVLOPMENT</span>
          </div>
          {/* Background image on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60  hover:translate-x-[-10rem] transition-all duration-500"
            style={{
              backgroundImage: 'url("https://th.bing.com/th/id/OIP.t3AeRbnlAKmcn2lqzGfKuwHaE8?rs=1&pid=ImgDetMain")', // Replace with your image URL
            }}></div>
        </div>
      </div>
      <div className="flex gap-8 flex-wrap justify-center mt-6 py-10">
        <div className="border-2 border-white transform rounded-xl md:h-72 md:w-72 h-[12rem] w-[12rem] shadow-xl transition duration-300 hover:scale-105 relative">
          <div className="flex h-full justify-center items-center bg-black bg-opacity-50 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-70 transition-all p-6 relative overflow-hidden">
            <span className="font-bold text-white opacity-100">Editing</span>
          </div>
          {/* Background image on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60  hover:translate-y-2/3 transition-all duration-500"
            style={{
              backgroundImage: 'url("https://th.bing.com/th/id/OIP._V5P_Z9gQbEi-LIlhiJ0cQHaEK?rs=1&pid=ImgDetMain")', // Replace with your image URL
            }}></div>
        </div>
      </div>

      <div className="flex gap-8 flex-wrap justify-center mt-6 py-10">
        <div className="border-2 border-white transform rounded-xl md:h-72 md:w-72 h-[12rem] w-[12rem] shadow-xl transition duration-300 hover:scale-105 relative">
          <div className="flex h-full justify-center items-center bg-black bg-opacity-50 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-70 transition-all p-6 relative overflow-hidden">
            <span className="font-bold text-white opacity-100">GAMING</span>
          </div>
          {/* Background image on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60  hover:translate-x-[10rem] transition-all duration-500"
            style={{
              backgroundImage: 'url("https://th.bing.com/th/id/OIP.ihrojbu9jkuS5YoLh_qWEAHaEK?rs=1&pid=ImgDetMain")', // Replace with your image URL
            }}></div>
        </div>
      </div>
    </animated.div>
    </>
  )
}

export default Hobby
