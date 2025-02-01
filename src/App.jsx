import './App.css'
import { useEffect, useState , useRef } from 'react';
import NeonText from './Component/NeonText';
import React from "react";
import Skils from './Component/Skils';
import Project from './Component/Project';
import ToolSection from './Component/Tool';
import Hobby from './Component/Hobby';
import About from './Component/About';
import Contact from './Component/Contact';




const Tools = [{ title: 'PfpFinder', description: 'Find the best profile pictures and banners for all your social media accounts.', technologies: 'HTML, CSS, BS, JS, NodeJS', image: 'path_to_pfp_image', }, { title: 'BikeKart', description: 'BikeKart is just another bike store web template with multiple sections.', technologies: 'HTML, CSS', image: 'path_to_bike_image', }, { title: 'SimplCalc', description: 'Tired of calculating manually? SimplCalc is best and faster solution.', technologies: 'HTML, CSS, JS', image: 'path_to_calc_image', },];

const projects = [{ title: 'Real time chat app', description: 'This application showcases the power of real-time communication paired with modern web development technologies, offering a robust, user-friendly platform for online chatting.', technologies: 'MERN stack (MongoDB, Express, React, Node.js) along with Socket.io', image: 'https://tse4.mm.bing.net/th?id=OIG4.psU9aAw0IiT6y06CynLI&pid=ImgGn', link: 'https://plugme.netlify.app/' }, { title: 'Contact manager', description: 'This contact manager simplifies contact organization, providing a smooth and reliable experience for users looking to stay on top of their personal or professional connections.', technologies: 'MongoDB, Express, React, Node.js', image: 'https://tse2.mm.bing.net/th?id=OIG2.zS8Ba88.S8L2wAAUbe9o&pid=ImgGn', link: 'https://contactzone.netlify.app/' }, { title: 'Todo List', description: 'This To-Do List application is a simple, yet powerful tool to help you manage your daily tasks, stay on track, and improve productivity . for geting your gole', technologies: 'MongoDB, Express, React, Node.js', image: 'https://tse2.mm.bing.net/th?id=OIG2.DwWfmgVSnbjM0yVu9ZK4&pid=ImgGn', link: 'https://taskdoner.netlify.app/' },];

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

      <div class="bg-black">

        <section className="md:flex md:items-center  md:justify-between md:p-[5.5rem] ">
          <div className="flex justify-center  md:mt-0 md:block">
            <img
              src="https://scontent.frdp1-1.fna.fbcdn.net/v/t39.30808-1/475345496_1313415529793859_3185035443026836281_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=8uiJTPpUKI4Q7kNvgEpwtZS&_nc_zt=24&_nc_ht=scontent.frdp1-1.fna&_nc_gid=AC5m_wYTFBOBwTNMNFXXvwC&oh=00_AYBFwlsTkNl_JbIESL3Tpl2nzJuO9VN5b7oY8q4Oke6dhw&oe=67A299D0" // Replace with your image source
              alt="Ranbir Seth"
              className="md:w-[16rem] w-40 h-40 md:h-[16rem] rounded-full border-1 shadow-lg md:mt-0 mt-8  glowing-border"
            />
          </div>
 
          <div className={` md:p-8  md:shadow-lg text-white md:items-center md:text-center -mt-3 md:mt-0 md:block`}>
            <h2 className="md:text-3xl font-bold mb-8 mt-14 md:mt-0 text-2xl md:ml-0 ml-10 text-purple-600 ">About Me</h2>

            <p className="md:text-lg md:w-[40vw] text-xs w-[90%] p-4 m-5 md:mt-0 -mt-8">
              <span className='h-[2rem]' >{displayedText}</span>
            </p>
          </div>
        </section>

        <section>
          <NeonText />
        </section>
        <section>
          <div className="md:mt-36 mt-20 ">
            <h1 className="animated-text md:text-xl text-xl  ">What i love to do ..</h1>
          </div>

          <div>
            <Hobby />

          </div>
        </section>
        <section className='md:p-40'>
          <About />
        </section>

        <section className='md:p-40 md:-mt-20'>
          <Skils />
        </section>

        <section>
          <div className='md:mt-24'>
            <ToolSection /></div>
        </section>

        <section className='Project mt-16 md:mt-36 ml-4 '>
          <h1 className="text-center text-white text-2xl md:pb-0 pb-[20rem]">Project</h1>
          <div className="App md:ml-20">
            <header className="App-header">
              <div className="flex flex-col justify-center items-center mt-8 ml-12  md:ml-36 md:flex-row gap-10 md:space-x-3 h-[50vh] w-[70vw] md:p-4">
                {projects.map((project, index) => (
                  <div key={index} className="project-item opacity-0 transition-opacity duration-700">
                    <Project
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      image={project.image}
                      link={project.link}
                    />
                  </div>
                ))}
              </div>

              <div className='flex justify-center md:mt-20 mt-[23rem]'>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">more</button>
              </div>
            </header>
            {/* <div className='flex  justify-center items-center mt-10  -ml-10'>
              <button className='box flex items-center justify-center  text-center p-3 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "'> Explore More </button>
            </div> */}
          </div>
        </section>
        <section>
          <Contact />
        </section>

      </div>

    </>
  )
}

export default App
