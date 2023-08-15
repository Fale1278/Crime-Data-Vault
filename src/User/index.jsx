import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import TableChart from '../User/Pages/Table-chart/TableChart'
import ViewCriminal from '../User/Pages/view-criminal/View-criminal-record'
import CriminalProfile from '../User/Pages/crime-profile/Criminal-Profile'
import UpdateCriminal from '../User/Pages/update-criminal/Update-Criminal'
import AddCriminal from '../User/Pages/add-criminal-record/Add-criminal-record'
import ViewVisitor from '../User/Pages/view-visitor/View-visitors-record'
import VisitorProfile from '../User/Pages/visitor-profile/Visitor-Profile'
import UpdateVisitor from '../User/Pages/update-visitor/Update-Visitor'
import AddVisitor from '../User/Pages/add-visitors-record/Add-visitors-record'
import PoliceRecord from '../User/Pages/police-records/Police-records'
import PoliceProfile from '../User/Pages/police-profile/Police-Profile'
import CrimeCategory from '../User/Pages/crime-categories/Crime-Categories'

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
          <Route path='/criminalProfile/:id' element={<CriminalProfile />} />
          <Route path='/updateCriminal' element={<UpdateCriminal />} />
          <Route path='/addCriminal' element={<AddCriminal />} />
          <Route path='/viewVisitor' element={<ViewVisitor />} />
          <Route path='/visitorProfile' element={<VisitorProfile />} />
          <Route path='/updateVisitor' element={<UpdateVisitor />} />
          <Route path='/addVisitor' element={<AddVisitor />} />
          <Route path='/policeRecord' element={<PoliceRecord />} />
          <Route path='/policeProfile/:ID' element={<PoliceProfile />} />
          <Route path='/crimeCategories' element={<CrimeCategory />} />
        </Routes> 
        <Footer />
      
    </div>
  )
}

export default index