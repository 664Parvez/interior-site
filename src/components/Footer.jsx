import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import { HashLink as Link } from "react-router-hash-link"

import "../styles/footer.css"

// Icons
import {BsArrowRight} from "react-icons/bs"
import {FiLinkedin, FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"

// Images
import Logo from "/public/addison-logo.png"

const Footer = () => {

  const year = new Date().getFullYear()

  useEffect(() => {
      AOS.init({duration: 2000})
  }, [])


  return (

    <>
        <div className="footer">
                <div className="container">
                      <div className="text-center">
                          <Link to="#hero">
                              <img data-aos="fade" src={Logo} alt=""></img>
                          </Link>
                          <hr className="mb-4" />
                      </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <h2>Let's  Design Together</h2>
                            <p className="mb-0">One of the reasons we became interior designers in the first place was because we love collecting and then putting it all together. But when you’re designing your own house, the hardest thing is to finish it, as you’re always adding your next favourite thing, and finally there’s no space left.</p>
                            <Link to="#contact-us" id="footerBtn" className="btn btn-lg">Contact with us <BsArrowRight/></Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-4">Useful Links</h5>
                            <ul className="footerItems">
                                <li><Link href="">Marketplace</Link></li>
                                <li><Link href="">Kindergarten</Link></li>
                                <li><Link href="">University</Link></li>
                                <li><Link href="">GYM Coaching</Link></li>
                                <li><Link href="">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-4">Our Company</h5>
                            <ul className="footerItems">
                                <li><Link href="">About Us</Link></li>
                                <li><Link href="">Services</Link></li>
                                <li><Link href="">Testimonials</Link></li>
                                <li><Link href="">Blog</Link></li>
                                <li><Link href="">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Get Contact</h5>
                            <p><b>Phone:</b> (406) 555-0120</p>
                            <p><b>E-mail:</b> addison@example.com</p>
                            <p><b>Location:</b> North America, USA</p>
                            <ul id="socialIcon">
                                <li><Link href=""><FiFacebook/></Link></li>
                                <li><Link href=""><FiTwitter/></Link></li>
                                <li><Link href=""><FiInstagram/></Link></li>
                                <li><Link href=""><FiLinkedin/></Link></li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-lg-5 text-lg-start text-md-center">
                            <p className="mb-0" id="copywrite">Copyright © {year} <Link href="">Parvez Rabbi</Link>. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-7 text-lg-end text-md-center">
                            <ul id="termsCondition">
                                <li><Link href="">Terms of service</Link></li>
                                <li><Link href="">Privacy policy</Link></li>
                                <li><Link href="/subscription">Subscription</Link></li>
                                <li><Link href="/login">Login & Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer