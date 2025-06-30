import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'
    const handleNavClick = () => setIsOpen(false);

    return (
        <header className={`fixed md:absolute top-0 left-0 w-full z-50 ${isHome ? 'bg-black md:bg-transparent' : 'bg-black'}`}>
            <nav className="flex items-center justify-between px-10 ">
                <img src="/logo.png" alt="logo" className="h-16" />

                <button onClick={() => setIsOpen(!isOpen)} className='ml-auto md:hidden text-white  '>
                    <svg className="w-8 h-8" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{isOpen ? (<path d="M6 18L18 6M6 6l12 12" />) : (<path d="M3 12h18M3 6h18M3 18h18" />)} </svg>
                </button>
                <div className='flex space-x-10'>
                    <ul
                        className={`flex flex-col md:flex-row items-center gap-6 text-white absolute md:static top-full left-0 w-full bg-black md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 md:max-h-none py-0 opacity-0 md:py-0 md:opacity-100'} `}>
                        <NavLink to="/" onClick={handleNavClick}><li>Home</li></NavLink>
                        <HashLink smooth to="/#About" onClick={handleNavClick}><li>About me</li></HashLink>
                        <HashLink smooth to="/#Skills" onClick={handleNavClick}><li>My Skills</li></HashLink>
                        <NavLink to="/Projects" onClick={handleNavClick}><li>My Projects</li></NavLink>
                        <NavLink to="/Contact" onClick={handleNavClick} className="bg-white text-black font-bold px-6 py-2 rounded-full"> CONTACT ME </NavLink>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Navbar
