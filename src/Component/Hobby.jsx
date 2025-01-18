import React from 'react'

function Hobby() {
  return (
<>
<div className='flex flex-col lg:flex-row lg:justify-center  gap-20 '>

<div class="flex gap-8 flex-wrap justify-center mt-6 py-10">
  <div class=" border-2  border-white transform  rounded-xl h-72 w-72 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105"> <div class="flex h-full justify-center items-center bg-black bg-opacity-50 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-70 transition-all p-6 relative overflow-hidden"><span class="font-boldtext-gray-500">Web Devlopment</span>
  </div>
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20 blur-xl">

    </div>
  </div>
</div>
<div class="flex gap-8 flex-wrap justify-center mt-6   py-10">
  <div class=" transform  rounded-xl h-72 w-72 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105"> <div class="border-2 border-white  flex  h-full justify-center items-center bg-black bg-opacity-50 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-70 transition-all p-6 relative overflow-hidden"><span class=" font-boldtext-gray-500">Editing</span>
  </div>
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20 blur-xl"></div>
  </div>
</div>
<div class="flex gap-8 flex-wrap justify-center mt-6   py-10">
  <div class=" border-2 border-white transform  rounded-xl h-72 w-72 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105"> <div class="flex h-full justify-center items-center bg-black bg-opacity-50 text-white rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-70 transition-all p-6 relative overflow-hidden"><span class="font-boldtext-gray-500">Gaming</span>
  </div>
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20 blur-xl"></div>
  </div>
</div>
</div>
</>
  )
}

export default Hobby
