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
            <h4 className='text-center text-white mt-12  text-3xl '>Skils</h4>
            <div className="flex flex-wrap justify-center gap-10 p-4 mt-10">
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem] '>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11 ' src="https://www.offidocs.com/images/logohtmlhtml5.jpg" alt="" />
                        <div className=' mt-1'>
                            <p>HTML </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600   "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[2.5rem] w-[2.5rem] -mt-11 ' src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                        <div className=' mt-1'>
                            <p>CSS </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600   "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11  ml-2' src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png" alt="" />
                        <div className=' mt-1'>
                            <p>JAVASCRIPT </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[2.5rem] w-[3.5rem] -mt-11 ' src="https://pluspng.com/img-png/react-logo-png-react-logo-png-import-io-578x270.png" alt="" />
                        <div className=' mt-1'>
                            <p>REACT JS </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[2.5rem] w-[2.5rem] -mt-11  ml-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="" />
                        <div className=' mt-1'>
                            <p>TAILWIND</p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11 ' src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" alt="" />
                        <div className=' mt-1'>
                            <p>NEXT JS</p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600   "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.2rem] w-[3.2rem] -mt-11  md:ml-2' src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="" />
                        <div className=' mt-1'>
                            <p>EXPRESS JS</p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600 "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11 ' src="https://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" />
                        <div className=' mt-1'>
                            <p>NODE JS </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11 md:ml-2' src="https://www.pngrepo.com/png/331488/512/mongodb.png" alt="" />
                        <div className=' mt-1'>
                            <p>MONGODB </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11 ' src="https://logodownload.org/wp-content/uploads/2019/10/python-logo-2.png" alt="" />
                        <div className=' mt-1'>
                            <p>PYTHON </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600  "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.2rem] w-[3.2rem] -mt-11 md:ml-2 ' src="https://hossaini.gallerycdn.vsassets.io/extensions/hossaini/bootstrap-intellisense/1.1.6/1692877389926/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                        <div className=' mt-1'>
                            <p>BOOTSTRAP  </p>
                        </div>
                    </div>
                </div>
                <div ref={(el) => (boxesRef.current[0] = el)}
                    className="box flex items-center justify-center md:h-24 md:w-24 h-20 w-20 text-center pt-12 text-white rounded-3xl shadow-lg   bg-gradient-to-r from-gray-500 via-purple-800 to-gray-900 
         transform transition-all duration-300 ease-in-out 
        hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l 
        hover:from-purple-700 hover:via-black-800 hover:to-gray-600 "
                >
                    <div className='flex flex-col justify-center md:text-xs text-[.5rem]'>
                        <img className='h-[3.5rem] w-[3.5rem] -mt-11 md:ml-2 ' src="https://th.bing.com/th/id/R.288caf89d9e32474055cc737fe86f763?rik=au8yQN%2fj6o59SA&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f58482deccef1014c0b5e4a64.png&ehk=Yi56%2bdBkUVKpeOB2ZEPm09SiW6pjkrN%2fHfDKwfzp8%2fU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <div className=' mt-1'>
                            <p>SOCKET IO </p>
                        </div>
                    </div>
                </div>
 
            </div>



        </div>
    )
}

export default Skils
