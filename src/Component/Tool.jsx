import { useEffect } from 'react';

const ToolSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn'); // Trigger animation
                } else {
                    entry.target.classList.remove('animate-fadeIn'); // Reset animation when out of view
                }
            });
        });

        const elements = document.querySelectorAll('.tool-item');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el)); // Clean up observer on unmount
        };
    }, []);

    return (
        <section className=" text-white md:mt-[15rem] mt-[10rem]">
            <h1 className="animated-text text-center md:text-3xl text-xs mb-14">Tools I Use to Develop Websites</h1>
          
            <div className="flex flex-wrap justify-center gap-10">
                {/* Add your tools here */}
                <div className="hover:translate-x-2 tool-item opacity-0 transform translate-y-10 transition-all duration-300">
                    <div className=" transform     transition duration-300 hover:scale-105 p-6 rounded-full">

                        <img  className=' mb-4 h-10 w-10' src="https://iconape.com/wp-content/png_logo_vector/visual-studio-code.png" alt="" />
                         <h1 className='-ml-2'>VS CODE</h1>
                    </div>
                </div>

                <div className=" hover:translate-x-2  tool-item opacity-0 transform translate-y-10 transition-all duration-300">
                    <div className=" transform     transition duration-300 hover:scale-105 p-6 rounded-full">

                        <img  className=' mb-4 h-10 w-10' src="https://www.shareicon.net/data/2016/06/20/606964_github_4096x4096.png" alt="" />
                         <h1 className='-ml-2'>GIT HUB</h1>

                    </div>
                </div>

                <div className=" hover:translate-x-2  tool-item opacity-0 transform translate-y-10 transition-all duration-300">
                    <div className=" transform     transition duration-300 hover:scale-105 p-6 rounded-full">

                        <img  className=' mb-4 h-10 w-10' src="https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png"   alt="" />
                         <h1 className='-ml-2'>CHAT GPTA</h1>
                    </div>
                </div>

                <div className="hover:translate-x-2  tool-item opacity-0 transform translate-y-10 transition-all duration-300">
                    <div className=" transform     transition duration-300 hover:scale-105 p-6 rounded-full">

                        <img  className=' mb-4 h-10 w-10' src="https://brandlogos.net/wp-content/uploads/2023/09/microsoft_copilot-logo_brandlogos.net_zaqzr-768x698.png" alt="" />
                         <h1 className='-ml-2'>COPILOT</h1>
                    </div>
                </div>
                <div className=" hover:translate-x-2  tool-item opacity-0 transform translate-y-10 transition-all duration-300">
                    <div className=" transform     transition duration-300 hover:scale-105 p-6 rounded-full">

                        <img  className=' mb-4 h-10 w-10' src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2024/02/google-gemini-ai-icon.png" alt="" />
                         <h1 className='-ml-2'>GIMINI</h1>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ToolSection;
