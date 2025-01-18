import './App.css'
import { useEffect, useState } from 'react';
import NeonText from './Component/NeonText';
import React from "react";
import Skils from './Component/Skils';
import Project from './Component/Project';
import ToolSection from './Component/Tool';
import Hobby from './Component/Hobby';
import About from './Component/About';
import Social from './Component/Social';
import Contact from './Component/Contact';

const Tools = [{ title: 'PfpFinder', description: 'Find the best profile pictures and banners for all your social media accounts.', technologies: 'HTML, CSS, BS, JS, NodeJS', image: 'path_to_pfp_image', }, { title: 'BikeKart', description: 'BikeKart is just another bike store web template with multiple sections.', technologies: 'HTML, CSS', image: 'path_to_bike_image', }, { title: 'SimplCalc', description: 'Tired of calculating manually? SimplCalc is best and faster solution.', technologies: 'HTML, CSS, JS', image: 'path_to_calc_image', },];

const projects = [{ title: 'PfpFinder', description: 'Find the best profile pictures and banners for all your social media accounts.', technologies: 'HTML, CSS, BS, JS, NodeJS', image: 'path_to_pfp_image', }, { title: 'BikeKart', description: 'BikeKart is just another bike store web template with multiple sections.', technologies: 'HTML, CSS', image: 'path_to_bike_image', }, { title: 'SimplCalc', description: 'Tired of calculating manually? SimplCalc is best and faster solution.', technologies: 'HTML, CSS, JS', image: 'path_to_calc_image', },];

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `Heyy there are i am  Ranbir and i am a IT student, i am a passionat Web Devloper and Softwear Engineer and i love to learn New technologies  `;


  useEffect(() => {
    let index = 0;

    const typingEffect = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingEffect);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn'); // Add animation class when in view
        } else {
          entry.target.classList.remove('animate-fadeIn');
        }
      });
    });

    const elements = document.querySelectorAll('.project-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el)); // Clean up observer on unmount
    };
  }, []);
  return (
    <>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
      <div class="bg-black">

        <section className="md:flex md:items-center  md:justify-between md:p-[5.5rem] ">
          <div className="flex justify-center mt-[4rem] md:mt-0 md:block">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQF1e3GmOstlwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700161374838?e=2147483647&v=beta&t=w9Z_LzGIg7VAsab18Q8hNm2GoCkZ41UG8DNF-3Pbers" // Replace with your image source
              alt="Ranbir Seth"
              className="md:w-78 w-40 h-40 md:h-78 rounded-full border-1 shadow-lg  "
            />
          </div>

          <div className={` md:p-8  md:shadow-lg text-white items-center text-center -mt-3 md:mt-0 md:block`}>
            <h2 className="md:text-3xl font-bold mb-8 mt-6 md:mt-0 text-2xl">About Me</h2>
            <p className="md:text-lg md:w-[40vw] text-xl w-[90%] p-4 m-5">
              <span className='text-[14px]'>{displayedText}</span>
            </p>
          </div>
        </section>

        <section>
          <NeonText />
        </section>
        <section>
          <div className="mt-36">
            <h1 className="animated-text ">What i love to do ..</h1>
          </div>

          <div>
            <Hobby />
          </div>
        </section>
        <section className='p-40'>
          <About />
        </section>

        <section className='p-40 -mt-20'>
          <Skils />
        </section>
        <section className='Project mt-16'>
          <h1 className="text-center text-white text-2xl">Project</h1>
          <div className="App ml-20">
            <header className="App-header">
              <div className="flex items-center ml-36 flex-row gap-10 space-x-3 h-[50vh] w-[70vw] p-4">
                {projects.map((project, index) => (
                  <div key={index} className="project-item opacity-0 transition-opacity duration-700">
                    <Project
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      image={project.image}
                    />
                  </div>
                ))}
              </div>
            </header>
            <div className='flex  justify-center items-center mt-10  -ml-10'>
              <button className='box flex items-center justify-center  text-center p-3 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "'> Explore More </button>
            </div>
          </div>
        </section>

        <section>
          <div className='mt-40'>
            <ToolSection /></div>
        </section>
        <section>

        </section>
        <section>
          <Contact />
        </section>
      </div>

    </>
  )
}

export default App
