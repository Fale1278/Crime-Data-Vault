import React from 'react'

import{
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom'


import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer from './Components/Footer/Footer'
import Overview from './Components/Overview/Overview'
import Chart from './Components/Chart/Chart'
import Table from './Components/Table/Table'
import AddCriminal from './Pages/Add-criminal-record'
import ViewCriminal from './Pages/View-criminal-record'
import ViewVisitors from './Pages/View-visitors-record'
import AddVisitor from './Pages/Add-visitors-record'
import PoliceRecords from './Pages/Police-records'
import PoliceProfile from './Pages/Police-Profile'
import CriminalProfile from './Pages/Criminal-Profile'


const App = () => {
  return (
    <div className='main-ody'>
      <Navbar />
      <Sidebar />
      {/* <Overview />
      <div className="Chart-Table">
        <Chart />
        <Table />
      </div> */}
      {/* <AddCriminal /> */}
      {/* <ViewCriminal /> */}
      {/* <ViewVisitors /> */}
      {/* <AddVisitor /> */}
      {/* <PoliceRecords />  */}
      {/* <PoliceProfile /> */}
      <CriminalProfile/>
      <Footer />
    </div>
  )
}

export default App
