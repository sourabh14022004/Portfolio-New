import React from 'react'
import logo from '../assets/sourabhLogo.png'
import { FaGithub, FaInstagram, FaL, FaLinkedin } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
const Navbar = () => {
    return (
        <nav className=' flex items-center justify-between py-6'>
            <div className=' flex flex-shrink-0 items-center'>
                <a href="/" aria-label='Home'>
                    <img src={logo} alt="Sourabh Sarkar" className=' mx-2' width={60} height={60} />
                </a>
            </div>
            <div className=' m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/sourabh-sarkar-a32821293/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/sourabh14022004"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'>
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/u/Sourabhishere/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LeetCode'>
                    <SiLeetcode />
                </a>
                <a href="https://www.instagram.com/sourabhsarkar960/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    <FaInstagram />
                </a>

            </div>
        </nav>
    )
}

export default Navbar;