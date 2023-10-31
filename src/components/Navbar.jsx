import React, {useState, useEffect} from 'react'
import { HashLink as Link } from "react-router-hash-link"

import "../styles/navbar.css"

// Icons
import {TbMenu} from "react-icons/tb"
import {LiaTimesSolid} from "react-icons/lia"

// Images
import Logo from "/public/addison-logo.png"

const Navbar = () => {

  const [navbarChange, setNavbarChange] = useState(false)
    const [resNav, setResNev] = useState(false)
    const [crossIcon, setCrossIcon] = useState(false)


    const navChange = () => {
        if(window.scrollY >= 60) {
            setNavbarChange(true)
        } else {
            setNavbarChange(false)
        }
    }

    useEffect(() => {
        if(resNav === true) {
            setCrossIcon(true)
        } else {
            setCrossIcon(false)
        }
    }, [resNav])

    useEffect(() => {
        window.addEventListener("scroll", navChange)
    }, [])

  return (
    <>
        <div className={navbarChange ? `scroll_nav` : `nav`}>
                <div className="logo">
                  <Link to="#hero">
                    <img src={Logo} alt=""></img>
                  </Link>
                </div>
                <ul className="navItems">

                    {/* Courses */}
                    <li className="cors"><Link to="#about-us">About Us</Link></li>

                    {/* About Us */}
                    <li><Link to="#services">Services</Link></li>

                    {/* Become a teacher */}
                    <li><Link to="#testimonials">Testimonials</Link></li>

                    {/* Blog */}
                    <li><Link to="#blog">Blog</Link></li>

                    {/* Contact */}
                    <li><Link to='#contact-us'>Contact Us</Link></li>

                </ul>

                    <li className='hambar' onClick={() => setResNev(!resNav)}> {crossIcon ? <LiaTimesSolid className="crossMenu" /> : <TbMenu className="resMenu" />} </li>
            </div>

                <div className={resNav ? "responsiveNav" : "responsiveNav_hide" }>
                    <ul>
                        <li><Link to="#about-us">About Us</Link></li>
                        <li><Link to="#services">Services</Link></li>
                        <li><Link to="#testimonials">Testimonials</Link></li>
                        <li><Link to="#blog">Blog</Link></li>
                        <li><Link to="#contact-us">Contact Us</Link></li>
                    </ul>
                </div>
    </>
  )
}

export default Navbar