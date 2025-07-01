import '../App.css'
import {Typed} from 'react-typed';
import About from '../components/About'
import Skills from '../components/Skills'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Me from '../assets/me.png'

function Home() {

  return (
    <>
      <main className='relative min-h-screen w-[100%] overflow-hidden md:border-2'>
        <div className="flex w-[100%] h-screen">
          <div className="flex flex-col items-center md:items-start justify-center md:px-50 relative bg-[#d7d7d7] w-full md:w-1/2 h-full z-10" style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}>
            <div className='flex md:hidden mb-5'><img className="w-52 h-52 rounded-full object-contain border-8 border-black shadow-lg" src={Me} alt="" /></div>
            <p className="md:text-2xl text-4xl  font-bold py-2 md:typing">Hi, I am</p>
            <p className="md:text-5xl text-6xl font-bold md:typing">Om Handa</p>
            <p className="md:text-lg  text-2xl font-bold text-[#909090]">Front-end Developer</p>
            <a href="https://drive.google.com/file/d/17qwkoF5Idmyosh1iriZyC8Wgnv1u_3AK/view?usp=sharing" className='w-full flexad' target='_blank'><button className="resume bg-black text-white md:h-12 h-16 w-3/4 md:w-full font-bold text-2xl md:text-xl rounded-2xl flexad my-10 ">Download Resume</button></a>
            <div className="links flex space-x-7 md:space-x-5 my-2">
              <a href="https://github.com/Om-Handa" target="_blank" ><img src={Github} alt="Github" className="h-10 " /></a>
              <a href="https://www.linkedin.com/in/om-handa-62451b301" target="_blank"><img src={LinkedIn} alt="LinkedIn" className="h-10 " /></a>
              <a href="https://www.instagram.com/om_handa246/" target="_blank" ><img src={Instagram} alt="Instagram" className="h-10 " /></a>
            </div>
          </div>
          <div className="relative hidden md:inline-block bg-black w-[70%] h-full -ml-[15%] z-0 " style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <img src={Me} alt="me" className='absolute bottom-0 left-55 max-h-[85%] object-contain' />
          </div>
        </div>
      </main>
      <About />
      <Skills />
    </>
  )
}

export default Home