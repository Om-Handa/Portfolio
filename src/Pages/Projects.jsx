import React from 'react'

function Projects() {
  const projectDetails=[
    {gifpath:"/todo.gif",githublink:"https://github.com/Om-Handa/React-Todo.git",pagelink:"https://om-handa.github.io/React-Todo/index.html",description:"A simple and responsive Todo App built with React, allowing users to add, view, and manage daily tasks with a clean and intuitive interface."},

    {gifpath:"/weather.gif",githublink:"https://github.com/Om-Handa/Real-time-Weather.git",pagelink:"https://om-handa.github.io/Real-time-Weather/weather.html",description:"A responsive weather app that shows real-time weather data for any city using an API."},

    {gifpath:"/rockpaperscissors.gif",githublink:"https://github.com/Om-Handa/Rock-Paper-Scissors.git",pagelink:"https://om-handa.github.io/Rock-Paper-Scissors/",description:"A fun and interactive browser game where you play Rock Paper Scissors against the computer."},

    {gifpath:"/analog.gif",githublink:"https://github.com/Om-Handa/Analog-clock.git",pagelink:"https://om-handa.github.io/Analog-clock/analog_clock.html",description:"A functional analog clock built with HTML, CSS, and JavaScript, mimicking a real-time wall clock"},

    {gifpath:"/digital.gif",githublink:"https://github.com/Om-Handa/Digital-Clock.git",pagelink:"https://om-handa.github.io/Digital-Clock/Digitalclock.html",description:"A live digital clock that displays the current time in HH:MM:SS format with clean styling."}
  ];

  return (
    <div className='flexad w-full'>
      <div className='flexad flex-col my-32 mx-10'>
        <div className="border-6 h-16 w-55 flexad text-3xl font-bold">MY PROJECTS</div>
          <div className="projects flexad md:flex-row flex-col gap-8 mt-15 flex-wrap">
            {projectDetails.map(({gifpath, githublink, pagelink, description},index)=>( 
              <div key={index} className='flex flex-col h-108 md:w-[30%]'>
                <img src={gifpath} alt={`Project-${index+1}`} className='border h-50 mb-3'/>
                <p className='text-justify text-lg mb-3'>{description}</p>
                <a href={pagelink} className='text-blue-700 text-center text-lg font-semibold underline'>Deploy Link</a>
                <a href={githublink} className='text-blue-700 text-center text-lg font-semibold underline'>Github Link</a>
                <div className="md:hidden my-8 border w-full h-[1px]"></div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Projects
