import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import "../styles/motivation.css"

import MotivationImg from "../../public/motivation.jpg"

const Motivation = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <>
        <section id="motivation" className='gap'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <img data-aos="fade" src={MotivationImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h5 data-aos="fade-down">MOTIVATION & INNOVATION</h5>
                        <h2 data-aos="fade-left">Make your statement in style</h2>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Motivation