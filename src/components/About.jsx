import React from 'react'

const About = () => {
    return (
        <div id='About' className='aboutme flexad w-full'>
            <div className='flexad flex-col mt-32 md:w-3/4'>
                <div className="border-6 h-16 w-44 flexad text-3xl font-bold">ABOUT ME</div>
                <p className='md:text-center mx-8 py-8 text-lg text-justify'>I'm a passionate and self-motivated front-end developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy creating responsive, user-friendly web interfaces and have built several projects like a weather application, digital and analog clocks, and dynamic to-do lists.
                    <br></br>
                    I'm always experimenting with new tools and frameworks like Tailwind CSS and Vite, and continuously improving my development workflow by actively debugging and refining my code. My approach to development is focused on writing clean, efficient code and delivering smooth user experiences.
                    <br></br>
                    I'm curious by nature, always eager to learn, and driven by the challenge of building things that are both functional and elegant.
                </p>
            </div>
        </div>
    )
}

export default About
