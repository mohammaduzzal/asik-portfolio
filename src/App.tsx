import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./components/modal/About"
import Banner from "./components/modal/Banner"
import Contact from "./components/modal/Contact"
import Portfolio from "./components/modal/Portfolio"
import Services from "./components/modal/Services"
import Skills from "./components/modal/Skills"
import Stats from "./components/modal/Stat"
import Testimonials from "./components/modal/Testimonial"




function App() {
  

  return (
    <>
      
   <Navbar/>
   <div className='min-h-[calc(100vh-243px)]'>
    <Banner/>
    <Stats/>
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
   </div>
   <Footer/>
    </>
  )
}

export default App
