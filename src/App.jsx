import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/home/Home'
import Criminal from './Pages/view-criminal/View-criminal-record'
import ACriminal from './Pages/add-criminal-record/Add-criminal-record'
import Visitor from './Pages/view-visitor/View-visitors-record'
import Avisitor from './Pages/add-visitors-record/Add-visitors-record'
import Police from './Pages/police-records/Police-records'

import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='main-ody'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewCriminal' element={<Criminal />} />
          <Route path='/addCriminal' element={<ACriminal />} />
          <Route path='/viewVisitor' element={<Visitor />} />
          <Route path='/addVisitor' element={<Avisitor />} />
          <Route path='/policeRecord' element={<Police />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App