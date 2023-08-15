

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import TableChart from '../Admin/Pages/Table-chart/TableChart'
import ViewCriminal from '../Admin/Pages/view-criminal/View-criminal-record'
import CriminalProfile from '../Admin/Pages/crime-profile/Criminal-Profile'
import ViewVisitor from '../Admin/Pages/view-visitor/View-visitors-record'
import PoliceRecord from '../Admin/Pages/police-records/Police-records'
import AssignPolice from '../Admin/Pages/Assign-Police/AssignPolice'
import RegisterPolice from '../Admin/Pages/Register-Police/RegisterPolice'
import CrimeCategory from '../Admin/Pages/crime-categories/Crime-Categories'

const index = () => {
  const containerStyle = {
    
    // backgroundColor: 'lightblue',
    // ... other styles
  };

  return (
    <div style={containerStyle}>
    
        <Navbar />
        <Sidebar />
        <Routes>
        <Route path='/' element={<TableChart />} />
        <Route path='/viewCriminal' element={<ViewCriminal />} />
        <Route path='/criminalProfile' element={<CriminalProfile />} />
        <Route path='/viewVisitor' element={<ViewVisitor />} />
        <Route path='/policeRecord' element={<PoliceRecord />} />
        <Route path='/registerPolice' element={<RegisterPolice />} />
        <Route path='/assignPolice' element={<AssignPolice />} />
        <Route path='/crimeCategories' element={<CrimeCategory />} />
        </Routes> 
        <Footer />
      
    </div>
  )
}

export default index

