import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import "../styles/contact.css"

const Contact = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
        <section id="contact-us" className='gap'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6" id='contact_first_column'>
                <h3 data-aos="fade">Contact us</h3>
                <p>Feel free to contact us with a project proposal, quote or estimation, or simply to say hello. Here’s our contact info.</p>

                <ul>
                  <li>
                    <h4 className='pt-4'>Address</h4>
                    <p>51 Francis Street, Darlinghurst NSW 2010, Australia</p>
                  </li>
                  <li>
                    <h4 className='pt-4'>Call Us Now</h4>
                    <p className='mb-0'>+61 1900 654 321</p>
                    <p className='mb-0'>+61 4914 570 110</p>
                  </li>
                  <li>
                    <h4 className='pt-4'>Email Us</h4>
                    <p className='mb-0'>office@addison.com.au</p>
                    <p className='mb-0'>contact@addison.com.au</p>
                  </li>
                </ul>

              </div>
              <div className="col-lg-6 col-md-6">
                <h3 data-aos="fade" className='get_in_touch'>Get in Touch</h3>
                <form action="">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mt-3">
                      <input type="text" placeholder='Full Name' className='form-control form-control-lg' />
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3">
                      <input type="tel" placeholder='Phone No.' className='form-control form-control-lg' />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <input type="text" placeholder='Subject' className='form-control form-control-lg' />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <input type="email" placeholder='Email' className='form-control form-control-lg' />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <textarea name="" id="" cols="30" rows="3" placeholder='Message Here . . .' className='form-control form-control-lg'></textarea>
                    </div>

                    <div className="col-lg-12">
                      <button className='btn btn-lg mt-4'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact