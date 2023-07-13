import React from 'react'

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Home from './Pages/home/Home'
import Criminal from './Pages/view-criminal/View-criminal-record'
import CriminalProfile from './Pages/crime-profile/Criminal-Profile'
import UpdateCriminal from './Pages/update-criminal/Update-Criminal'
import ACriminal from './Pages/add-criminal-record/Add-criminal-record'
import Visitor from './Pages/view-visitor/View-visitors-record'
import Avisitor from './Pages/add-visitors-record/Add-visitors-record'
import Police from './Pages/police-records/Police-records'
import PoliceProfile from './Pages/police-profile/Police-Profile'
import CrimeCategories from './Pages/crime-categories/Crime-Categories'

import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import VisitorProfile from './Pages/visitor-profile/Visitor-Profile'


const App = () => {
  return (
    <div className='main-ody'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewCriminal' element={<Criminal />} />
          <Route path='/criminalProfile' element={<CriminalProfile />} />
          <Route path= '/updateCriminal' element={<UpdateCriminal />} />
          <Route path='/addCriminal' element={<ACriminal />} />
          <Route path='/viewVisitor' element={<Visitor />} />
          <Route path='visitorProfile' element={<VisitorProfile />} />
          {/* <Route path='/addVisitor' element={<Avisitor />} /> */}
          <Route path='/policeRecord' element={<Police />} />
          <Route path='/policeProfile' element ={<PoliceProfile />} />
          <Route path='/crimeCategories' element={<CrimeCategories/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App