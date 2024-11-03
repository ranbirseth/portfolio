import './App.css'
import { useEffect, useState } from 'react';
import NeonText from './Component/NeonText';

function App() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `Hi, my name is Ranbir and i am a IT student, i am a passionat Web Devloper and Softwear Engineer and i love to learn New technologies , `;

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


  return (
    <>
      <div class="absolute inset-0 -z-10 h-[150vh] w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]  ">
      </div>

      <section className="md:flex md:items-center md:justify-between md:p-[5.5rem] ">
        <div className="flex justify-center mt-10 md:mt-0 md:block">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF1e3GmOstlwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700161374838?e=2147483647&v=beta&t=w9Z_LzGIg7VAsab18Q8hNm2GoCkZ41UG8DNF-3Pbers" // Replace with your image source
            alt="Ranbir Seth"
            className="md:w-78 md:h-78 rounded-full border-1 shadow-lg  "
          />
        </div>
        {/* Text Section */}
        <div className={` md:p-8  md:shadow-lg text-white items-center text-center mt-4 md:mt-0 md:block`}>
          <h2 className="md:text-3xl font-bold mb-8 mt-6 md:mt-0 text-2xl">About Me</h2>
          <p className="md:text-lg md:w-[40vw] text-xl w-[90%] p-4 m-5">
            {displayedText}
          </p>
        </div>

        {/* Image Section */}
      </section>
      <section>
        <NeonText />
      </section>
    </>
  )
}

export default App
