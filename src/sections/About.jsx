import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import { HashLink as Link } from 'react-router-hash-link'

import "../styles/about.css"

// Image
import AboutImg from "../../public/about-us.jpg"
import AboutImgTwo from "../../public/about-us-2.jpg"

const About = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
        <section id="about-us" className='gap'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <img data-aos="fade" src={AboutImg} alt="" />
              </div>
              <div className="col-lg-6 col-md-6">
                <h5 className='about_small_title' data-aos="fade-down">WHAT WE DO?</h5>
                <h2 data-aos="fade-left">Design for life</h2>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>

                <Link to="#services" className="btn btn-lg mt-5">Our Services</Link>
              </div>
            </div>

            <hr className='my-5' />

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <h5 data-aos="fade-down">THE END RESULT</h5>
                <h2 data-aos="fade-right">Making a better home</h2>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Completely synergize resource taxing relationships via premier niche markets.</p>

                <Link to="#contact-us" className="btn btn-lg mt-5">Contact Us</Link>
              </div>
              <div className="col-lg-6 col-md-6">
                <img className='about_second_section' data-aos="fade" src={AboutImgTwo} alt="" />
              </div>
            </div>

          </div>
        </section>
    </>
  )
}

export default About