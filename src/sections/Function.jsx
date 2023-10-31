import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import { HashLink as Link } from 'react-router-hash-link'

import "../styles/function.css"

// Images
import Floor from "../../public/floor.png"
import Chair from "../../public/chair.png"
import Plant from "../../public/plant.png"

const Function = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
        <section id="function" className='gap'>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <h4 data-aos="fade-down">MAKING A FUNCTIONAL HOME</h4>
                <h2 data-aos="fade-right">Form meets function</h2>
                <p className='leftside_pere'>We don’t believe in moving to a new place and replicating the one you left behind. Where’s the fun in that?</p>

                <Link to="#contact-us" className="btn btn-lg mt-5">Contact Us</Link>
              </div>

              <div className="col-lg-5 col-md-6">
                <div className="row">
                  <div className="col-2">
                    <img data-aos="fade" src={Floor} alt="" />
                  </div>
                  <div className="col-10">
                    <h4>Think blueprints</h4>
                    <p className='mb-0'>COLLABORATIVELY ADMINISTRATE EMPOWERED MARKETS.</p>
                  </div>

                  <hr />

                  <div className="col-2">
                    <img data-aos="fade" src={Chair} alt="" />
                  </div>
                  <div className="col-10">
                    <h4>Furniture placing</h4>
                    <p className='mb-0'>KEEPING YOUR EYE ON THE BALL WHILE PERFORMING A DEEP DIVE</p>
                  </div>

                  <hr />

                  <div className="col-2">
                    <img data-aos="fade" src={Plant} alt="" />
                  </div>
                  <div className="col-10">
                    <h4>Plants are important</h4>
                    <p className='mb-0'>TAKING SEAMLESS KEY PERFORMANCE INDICATORS OFFLINE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Function