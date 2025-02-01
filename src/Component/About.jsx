import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function About() {
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
    transform: isVisible ? 'translateY(30px)' : 'translateY(80px)',
    config: { tension: 190, friction: 30 },
  });
  return (
    <animated.div  ref={ref} style={animation} className='md:p-0 p-5'>
      <h3 className=' text-center text-3xl mt-10 text-white'>About Me</h3>
      <div>
        <div className=" md:ml-14 md:mr-6 text-xs md:text-xl md:mt-12 text-white  mt-8  font-serif ">
          Hello! Im a passionate software engineer with a lifelong love for coding. Ever since I was a child, I dreamed of becoming an good engineer, and now that dream has evolved into a deep interest in website development. I find immense joy in creating seamless, interactive, and visually appealing websites that solve real-world problems.

          Python has always been my go-to language, and I love writing clean, efficient code with it. It fuels my creativity and keeps me excited to build new things. Whether it's crafting the perfect backend solution or designing a smooth front-end experience, Im always eager to dive deep into new challenges and grow my skills.

          Welcome to my corner of the web! Feel free to explore my work and connect with me. Im always open to collaboration and new ideas.
        </div>
      </div>
    </animated.div>
  )
}

export default About
