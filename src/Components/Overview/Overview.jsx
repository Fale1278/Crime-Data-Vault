import React from 'react'
import Arrow from '../../assets/arrow.png'

const Overview = () => {
  return (
    <div className='overview'>
      <h3>Overview</h3>
      <div className="overview-container">
        <div className="overview-box">
          <h1>6</h1>
          <h3>Criminals in Custody</h3>
          <p className='info'><span>More info</span> <img src={Arrow} alt="" /></p>
        </div>

        <div className="overview-box">
          <h1>4</h1>
          <h3>Visitors</h3>
          <p className='info'><span>More info</span> <img src={Arrow} alt="" /></p>
        </div>

        <div className="overview-box">
          <h1>20</h1>
          <h3>Officers</h3>
          <p className='info'><span>More info</span> <img src={Arrow} alt="" /></p>
        </div>

        <div className="overview-box">
          <h1>5</h1>
          <h3>Crime Categories</h3>
          <p className='info'><span>More info</span> <img src={Arrow} alt="" /></p>
        </div>
      </div>
      
      <p className='chart-p'>Crime Category Rate based on Criminal Record at Anglo Jos Station</p>
    </div>
  )
}

export default Overview