import React from 'react'

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Home from './User/Pages/home/Home'
import Criminal from './User/Pages/view-criminal/View-criminal-record'
import CriminalProfile from './User/Pages/crime-profile/Criminal-Profile'
import UpdateCriminal from './User/Pages/update-criminal/Update-Criminal'
import ACriminal from './User/Pages/add-criminal-record/Add-criminal-record'
import UpdateVisitor from './User/Pages/update-visitor/Update-Visitor'
import Visitor from './User/Pages/view-visitor/View-visitors-record'
import Avisitor from './User/Pages/add-visitors-record/Add-visitors-record'
import Police from './User/Pages/police-records/Police-records'
import PoliceProfile from './User/Pages/police-profile/Police-Profile'
import CrimeCategories from './User/Pages/crime-categories/Crime-Categories'

import Navbar from './User/Components/Navbar'
import Sidebar from './User/Components/Sidebar'
import Footer from './User/Components/Footer'
import VisitorProfile from './User/Pages/visitor-profile/Visitor-Profile'


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
          <Route path='/visitorProfile' element={<VisitorProfile />} />
          <Route path='/updateVisitor' element={<UpdateVisitor />} />
          <Route path='/addVisitor' element={<Avisitor />} />
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