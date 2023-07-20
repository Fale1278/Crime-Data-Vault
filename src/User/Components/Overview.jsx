import React from 'react'
import Arrow from '../../assets/arrow.png'

const Overview = () => {
  return (
    <div className='overview'>
      <h3>Overview</h3>
      <div className="overview-container">
        <div className="overview-box">
          <h1>0</h1>
          <h3>Criminals in Custody</h3>
          <a href='#' className='info'><span>More info</span> <img src={Arrow} alt="" /></a>
        </div>

        <div className="overview-box">
          <h1>0</h1>
          <h3>Visitors</h3>
          <a href='#' className='info'><span>More info</span> <img src={Arrow} alt="" /></a>
        </div>

        <div className="overview-box">
          <h1>0</h1>
          <h3>Officers</h3>
          <a href='#' className='info'><span>More info</span> <img src={Arrow} alt="" /></a>
        </div>

        <div className="overview-box">
          <h1>0</h1>
          <h3>Crime Categories</h3>
          <a href='#' className='info'><span>More info</span> <img src={Arrow} alt="" /></a>
        </div>
      </div>
      
      <p className='chart-p'>Crime Category Rate based on Criminal Record at Anglo Jos Station</p>
    </div>
  )
}

export default Overview