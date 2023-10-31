import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper Slider End

import "../styles/hero.css"

import { HashLink as Link } from "react-router-hash-link"


// Images
import Hero1 from "../../public/hero1.png"
import Hero2 from "../../public/hero2.png"
import Hero3 from "../../public/hero3.png"



const Hero = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
      <section id="hero" className='gap'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <h5 data-aos="fade-down">CREATING YOUR OWN SPACE</h5>
              <h1 data-aos="fade-right">Simplicity wins over complexity</h1>

              <Link className='btn btn-lg mt-5' to="#about-us">Read More</Link>
            </div>
            <div className="col-lg-6 col-md-6">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={Hero1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hero2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hero3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero