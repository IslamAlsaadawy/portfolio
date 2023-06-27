import React from 'react'
import Header from './sections/header/Header'
import Navbar from './sections/navbar/Navbar'
import About from './sections/about/About'
import Service from './sections/services/Service'
import Portfolio from './sections/portfolio/Portfolio'
import FAQS from './sections/faqs/FAQs'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'
import Testiomnials from './sections/testimonies/Testiomnials'


const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      {/* <Portfolio/>
      <Testiomnials/> */}
      {/* <FAQS/> */}
      <Contact/>
      {/* <Footer/>
      <FloatingNav/> */}
    </main>
  )
}

export default App