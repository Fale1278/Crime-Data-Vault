import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Footer from '../../Components/Footer'
import Chart from '../../Components/Chart'
import Table from '../../Components/Table'
import Overview from '../../Components/Overview'

const Home = () => {
  return (
    <div>
      <Overview />
      <div className="chart-table">
        <Chart />
        <Table />
      </div>
    </div>
  )
}

export default Home