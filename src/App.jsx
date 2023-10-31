import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Section
import Blog from './sections/Blog'
import Ourproject from './sections/Our-project'
import Contact from './sections/Contact'
import About from './sections/About'
import Motivation from './sections/Motivation'
import Function from './sections/Function'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Hero from './sections/Hero'

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Hero />

        <Motivation />

        <Function />

        <About />

        <Services/>

        <Ourproject />

        <Testimonials/>

        <Blog />

        <Contact />
        {/* <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/testimonials' element={<Testimonials />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
        </Routes> */}

        <Footer/>
      </Router>
    </>
  )
}

export default App
