import React, { useEffect, useState } from 'react'
import '../App.css'

function NeonText() {
    const [isGlowing, setIsGlowing] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) { // Adjust this value based on when you want the glow to activate
            setIsGlowing(true);
        } else {
            setIsGlowing(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <div>
                <h2 className={`cursiv-font mt-20 text-2xl md:text-4xl text-center transition duration-300 ${isGlowing ? 'glow neon' : ''}`}>
                    {"< MERN STACK DEVELOPER />"}
                </h2>
            </div>
            <div className={`flex justify-center gap-8 mt-8 md:mt-12 ${isGlowing ? 'glow' : ''}`}>
      {/* MongoDB Logo */}
      <img
        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" 
        alt="MongoDB Logo"
        className="h-5 w-5"
      />
      {/* Express.js Logo */}
      <img
        src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
        alt="Express.js Logo"
        className="h-5 w-5"
      />
      {/* React Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="h-5 w-5"
      />
      {/* Node.js Logo */}
      <img
        src="https://www.edlibre.com/wp-content/uploads/nodejs-34c5f8cc37f0756108c490a903d80176.png"
        alt="Node.js Logo"
        className="h-5 w-10 "
      />
    </div>
        </>

    )
}

export default NeonText
