import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Swiper Module End

import "../styles/testimonials.css"

// Images
import Test1 from "../../public/chair2.png"

const Testimonials = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
        <section id="testimonials" className='gap'>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h2 data-aos="fade-right">Testimonials</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem dolor, quisquam minima similique cum eveniet possimus. Vitae, autem laborum? Ex, ut sed error id facere fugiat sapiente quos quae vero voluptatibus quasi voluptas vel blanditiis aspernatur est corrupti aliquid. Neque, nulla aperiam. Vel, consectetur.</p>
              </div>
              <div className="col-4"></div>
            </div>

            {/* Swiper Carousel Start */}
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints= {{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1025: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='testCard'>
                  <h3>"</h3>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                  
                  <hr />

                  <div className="row align-items-center">
                    <div className="col-3">
                      <img className='testImg' src={Test1} alt="" />
                    </div>
                    <div className="col-9">
                      <h5>Harish Khan</h5>
                      <p className='mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Swiper Carousel End */}

          </div>
        </section>
    </>
  )
}

export default Testimonials
