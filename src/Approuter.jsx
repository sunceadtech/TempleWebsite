import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Contact from './component/pages/Contact';
const Approutes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  )
}

export default Approutes
