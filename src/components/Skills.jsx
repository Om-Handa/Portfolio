import React from 'react'

const Skills = () => {
    return (
        <div id='Skills'>
            <section className='Skills flexad w-full'>
                <div className='flexad flex-col mt-32 mx-10md:w-3/4 flex-wrap'>
                    <div className="border-6 h-16 w-44 flexad text-3xl font-bold">MY SKILLS</div>
                    <div className="flexad flex-col space-y-10 my-10">
                        <p className='font-bold text-2xl self-start'>USING NOW:</p>
                        <div className="1 flexad space-x-10 md:space-x-30">
                        <div className="imgad"><img src="https://portfolio-web-sand-kappa.vercel.app/images/html.svg" alt="HTML" className='w-24'/>HTML5</div>
                        <div className="imgad"><img src="https://portfolio-web-sand-kappa.vercel.app/images/css.svg" alt="CSS" className='w-24'/>CSS3</div>
                        <div className="imgad"><img src="https://portfolio-web-sand-kappa.vercel.app/images/javascript.svg" alt="JS" className='w-24 '/>JavaScript</div>
                        </div>
                        <div className="2 flexad space-x-10 md:space-x-30">
                        <div className="imgad"><img src="https://portfolio-web-sand-kappa.vercel.app/images/react.svg" alt="REACT" className='w-24'/>React</div>
                        <div className="imgad"><img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="TAILWIND" className='w-24'/>TailwindCSS</div>
                        <div className="imgad"><img src="https://portfolio-web-sand-kappa.vercel.app/images/Git-Icon-1788C%201.png" alt="GIT" className='w-24 '/>Git</div>
                        </div>
                        <div className="3 flexad space-x-10 md:space-x-30">
                        <div className="imgad"><img src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="C" className='w-24 '/>C</div>
                        <div className="imgad"><img src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="C++" className='w-24'/>C++</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Skills flexad w-full'>
                <div className='flexad flex-col w-3/4 flex-wrap'>
                    <div className="flexad flex-col space-y-10 my-10">
                        <p className='font-bold text-2xl self-start'>LEARNING NOW:</p>
                        <div className="1 flexad space-x-10 md:space-x-30">
                        <div className="imgad"><img src="https://portfolio-web-sand-kappa.vercel.app/images/nodejs.png" alt="Node JS" className='w-24'/>Node JS</div>
                        <div className="imgad"><img src="https://www.svgrepo.com/show/373845/mongo.svg" alt="MongoDB" className='w-24'/>MongoDB</div>
                        <div className="imgad"><img src="https://www.svgrepo.com/show/342062/next-js.svg" alt="Next JS" className='w-24 '/>Next JS</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
