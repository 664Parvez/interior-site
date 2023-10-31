import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import {HashLink as Link} from "react-router-hash-link"

import "../styles/projects.css"

// Image
import Project from "../../public/project.jpg"

const Ourproject = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <>
        <section id='project' className='gap'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <h5 data-aos="fade-down">SOLUTIONS & CLIENTS</h5>
                        <h2 data-aos="fade-right">Our Projects</h2>
                        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>

                        <Link to="#contact-us" className='btn btn-lg mt-5'>Contact Us For More</Link>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img data-aos="fade" src={Project} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Ourproject