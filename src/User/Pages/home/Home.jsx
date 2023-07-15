import React from 'react'
import Chart from '../../../User/Components/Chart'
import Table from '../../../User/Components/Table'
import Overview from '../../../User/Components/Overview'

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