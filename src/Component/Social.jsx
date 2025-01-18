import React from 'react'
import '../App.css'

function Social() {
  return (
    <>
<div>
      <h1 className="animated-text text-center text-[2rem] mt-[3rem]">Be In My Touch</h1>
      
      {/* Social Icons Container */}
      <div className="flex flex-row  items-center text-center justify-center ">
        
        {/* GitHub Icon */}
        <div className=" rounded-full h-20 w-20 p-2 pt-7 transform transition-transform duration-300 ease-in-out hover:scale-150 hover:shadow-lg">
          <img
            className="h-16 w-16 shadow-xl  shadow-blue-500/50 hover:animate-glow rounded-full "
            src="https://www.shareicon.net/data/2016/06/20/606964_github_4096x4096.png"
            alt="GitHub"
          />
        </div>
        
        {/* LinkedIn Icon */}
        <div className="rounded-full h-20 w-20 p-2 pt-7 transform transition-transform duration-300 ease-in-out hover:scale-150 hover:shadow-lg">
          <img
            className="h-16 w-16 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/021/460/490/original/linkedin-logo-free-download-free-png.png"
            alt="LinkedIn"
          />
        </div>

        {/* Instagram Icon */}
        <div className="rounded-full h-20 w-20 p-2 pt-7 transform transition-transform duration-300 ease-in-out hover:scale-150 hover:shadow-lg">
          <img
            className="h-16 w-16 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/018/930/413/large_2x/instagram-logo-instagram-icon-transparent-free-png.png"
            alt="Instagram"
          />
        </div>

        {/* Facebook Icon */}
        <div className="rounded-full h-20 w-20 p-2 pt-7 transform transition-transform duration-300 ease-in-out hover:scale-150 hover:shadow-lg">
          <img
            className="h-12 w-12 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full mt-2"
            src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
            alt="Facebook"
          />
        </div>

        {/* Snapchat Icon */}
        <div className="rounded-full h-20 w-20 p-2 pt-7 transform transition-transform duration-300 ease-in-out hover:scale-150 hover:shadow-lg">
          <img
            className="h-16 w-16 shadow-xl from-blue-500 shadow-blue-500/50 hover:animate-glow rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/018/930/694/original/snapchat-logo-snapchat-icon-transparent-free-png.png"
            alt="Snapchat"
          />
        </div>

      </div>
    </div>
    </>
  )
}

export default Social
