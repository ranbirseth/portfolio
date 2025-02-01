import React from 'react'
import '../App.css'

function Social() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='flex flex-col '>
        <h1 className="animated-text text-center md:text-[2rem] md:mt-[3rem] mt-5 teaxt-xs">Be In My Touch</h1>

        {/* Social Icons Container */}
        <div className="flex flex-row  items-center text-center justify-center gap-2 md:gap-5">

          {/* GitHub Icon */}
            <a href="https://github.com/ranbirseth">
          <div className=" rounded-full md:h-20 md:w-20 p-2 pt-7 md:transform md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-150 md:hover:shadow-lg">
            
            <img
              className="md:h-16 md:w-16 h-10 w-10 shadow-xl  shadow-blue-500/50 hover:animate-glow rounded-full "
              src="https://www.shareicon.net/data/2016/06/20/606964_github_4096x4096.png"
              alt="GitHub"
            />
          </div>
          </a>
          {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/ranbir-seth-02a0471b3/">
          <div className="rounded-full md:h-20 md:w-20 p-2 pt-7 md:transform md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-150 md:hover:shadow-lg">
            <img
              className="md:h-16 md:w-16 h-10 w-10 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/021/460/490/original/linkedin-logo-free-download-free-png.png"
              alt="LinkedIn"
            />
          </div>
          </a>

          {/* Instagram Icon */}
            <a href="https://www.instagram.com/seth_ranbir1/">
          <div className="rounded-full md:h-20 md:w-20 p-2 pt-7 md:transform md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-150 md:hover:shadow-lg">
            <img
              className="md:h-16 md:w-16 h-10 w-10 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/018/930/413/large_2x/instagram-logo-instagram-icon-transparent-free-png.png"
              alt="Instagram"
            />
          </div>
          </a>
          {/* Facebook Icon */}
            <a href="https://www.facebook.com/ranbir.seth.10">
          <div className="rounded-full md:h-20 md:w-20 p-2 pt-7 md:transform md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-150 md:hover:shadow-lg">
            <img
              className="md:h-12 md:w-12 h-8 w-8 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full mt-2"
              src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
              alt="Facebook"
            />
          </div>
          </a>
          {/* Snapchat Icon */}
            <a href="">
          <div className="rounded-full md:h-20 md:w-20 p-2 pt-7 md:transform md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-150 md:hover:shadow-lg">
            <img
              className="md:h-16 md:w-16 h-10 w-10 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/018/930/694/original/snapchat-logo-snapchat-icon-transparent-free-png.png"
              alt="Snapchat"
            />
          </div>
          </a>
        </div>
        <div>
          <p className='text-white mt-20  md:ml-28 md:text-[1rem] text-xs  '>&copy; {year} Ranbir seth. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Social
