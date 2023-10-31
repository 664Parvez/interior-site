import React, {useEffect} from 'react'

// Animation Module
import AOS from "aos"
import "aos/dist/aos.css"

import {Link} from "react-router-dom"

import "../styles/blog.css"

// Icon
import {AiOutlineClockCircle, AiFillWechat} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"

// Image
import Blog1 from "../../public/blog1.jpg"
import Blog2 from "../../public/blog2.jpg"
import Blog3 from "../../public/blog3.jpg"


const Blog = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <>
        <section id="blog" className='gap'>
          <div className="container">
            <h5 data-aos="fade-down">WHAT'S UP?</h5>
            <h2 data-aos="fade-right">Latest news</h2>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <img src={Blog1} className='card-img' alt="" />
                  <div className="card-body">
                    <div className="card-title">
                      <Link to="">
                        <h4>Newest project for IKEA</h4>
                      </Link>

                      <ul>
                        <li><AiOutlineClockCircle /> May 17, 2023</li>
                        <li><BiUserCircle /> by <Link to="">Justin Willis</Link></li>
                        <li><AiFillWechat /> 3</li>
                      </ul>

                      <hr />
                      <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <img src={Blog2} className='card-img' alt="" />
                  <div className="card-body">
                    <div className="card-title">
                      <Link to="">
                        <h4>Furniture design basics</h4>  
                      </Link>

                      <ul>
                        <li><AiOutlineClockCircle /> Jan 24, 2023</li>
                        <li><BiUserCircle /> by <Link to="">Justin Willis</Link></li>
                        <li><AiFillWechat /> 5</li>
                      </ul>

                      <hr />
                      <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <img src={Blog3} className='card-img' alt="" />
                  <div className="card-body">
                    <div className="card-title">
                      <Link to="">
                        <h4>Your office bookshelf</h4>
                      </Link>

                      <ul>
                        <li><AiOutlineClockCircle /> Jun 13, 2023</li>
                        <li><BiUserCircle /> by <Link to="">Justin Willis</Link></li>
                        <li><AiFillWechat /> 0</li>
                      </ul>

                      <hr />
                      <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Blog