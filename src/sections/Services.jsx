import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import {HashLink as Link} from "react-router-hash-link"

import "../styles/services.css"

// Images
import Service1 from "../../public/scale.png"
import Service2 from "../../public/lamp.png"
import Service3 from "../../public/chair2.png"
import Service4 from "../../public/palate.png"

const Services = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
        <section id="services" className='gap'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-lg-3 col-md-6 text-center">
                    <img data-aos="flip-left" src={Service1} alt="" />
                    <p className='mb-0 service_small_text'>DEDICATED INTERIOR</p>
                    <h5>Design</h5>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <img data-aos="flip-left" src={Service2} alt="" />
                    <p className='mb-0 service_small_text'>RELENTLESS PROJECT</p>
                    <h5>Precision</h5>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <img data-aos="flip-left" src={Service3} alt="" />
                    <p className='mb-0 service_small_text'>CUSTOM MADE</p>
                    <h5>Furniture</h5>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <img data-aos="flip-left" src={Service4} alt="" />
                    <p className='mb-0 service_small_text'>INTERIOR DESIGN</p>
                    <h5>Advices</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <h2 data-aos="fade-left">Our Services</h2>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>

                <Link to="#contact-us" className='btn btn-lg mt-5'>Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services