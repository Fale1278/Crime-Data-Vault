import React from 'react'

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
      {/* <PoliceRecords /> */}
      <Footer />
    </div>
  )
}

export default App
