import React, { useEffect, useRef } from 'react'

function Skils() {
    const boxesRef = useRef([]);

    useEffect(() => {
        // Define the intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the animation class when the box is in view
                        entry.target.classList.add("animate-opacity-slide");
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the box is in view
            }
        );

        // Observe each box element
        boxesRef.current.forEach((box) => {
            observer.observe(box);
        });

        return () => {
            // Cleanup the observer on component unmount
            observer.disconnect();
        };
    }, []);

    return (
        <div >
            <h4 className='text-center text-white mt-12  text-2xl '>Skils</h4>
            <div className="flex flex-wrap justify-center gap-10 p-4 mt-10">
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center w-24 h-24 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-blue-800 hover:to-gray-600  "
                >
                    <div>
                        <img className='h-10 w-12  -mt-12' src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png" alt="" />
                        <div className=' mt-1'>
                            <p>React js </p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Skils
