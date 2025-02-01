import React from 'react';

const Project = ({ title, description, technologies, image , link }) => {
  return (
    <>

      <div className="max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 ">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">{title}</div>
            <button className="bg-purple-600 text-white px-3 py-1 rounded-full hover:bg-purple-700 transition duration-300">
             
              <a href={link}>Visit</a>
            </button>
          </div>
          <p className="mt-2 text-sm">{description}</p>
          <p className="text-xs mt-2 text-gray-400">{technologies}</p>
        </div>
        <div className="bg-gray-900 p-4">
          <img src={image} alt={title} className="rounded-full w-10 h-10" />
        </div>
      </div>
    </>
  );
};

export default Project;
