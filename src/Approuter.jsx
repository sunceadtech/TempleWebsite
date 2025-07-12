import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Contact from './component/pages/Contact';
import HeroWrapper from './component/pages/HeroWrapper';
import Footer from "./component/pages/Footer"
import TempleDetails from './component/pages/TempleDetails';
import About from './component/pages/About';
import Search from './component/search/Search';
import ScrollToTop from './component/pages/ScrollToTop';
import NearByTemple from './component/search/NearByTemple';
import Signup from './component/user/Signup';
import Login from './component/user/Login';
import AddTemple from "./component/pages/AddTemple"
import ThankYou from './component/pages/ThankYou';
const Approutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HeroWrapper />} />
          <Route path='/temple/:id' element={<TempleDetails />} />
             <Route path='/about' element={<About />} />
               <Route path='/search' element={<Search />} />
           {/* <Route path='/nearby' element={<NearByTemple />} />*/}   
            {/* <Route path='/addTemple' element={<AddTemple />} /> */} 
              <Route path='/thankyou' element={<ThankYou/>} />
               <Route path='/signup' element={<Signup/>} />
              <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default Approutes
