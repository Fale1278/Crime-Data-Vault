import React from 'react'

import Robbery from '../../assets/Robbery.png'
import Murder from '../../assets/murder.png'
import Sexual from '../../assets/Sexual.png'
import Cyber from '../../assets/cyber.png'
import Kidnapping from '../../assets/kidnapping.png'

const Table = () => {
  return (
    <div className='Table'>
      <h3>LEGEND:</h3>
      <div className="id">
        <span>I.D</span>
        <span className='crime-table'>CRIME CATEGORY</span>
      </div>

      
      <div className="id">
        <span>1</span>
        <span>Robbery/Theft</span>
        <img className='images' src={Robbery} alt="" />
      </div>

      
      <div className="id">
        <span>2</span>
        <span>Murder</span>
        <img className='images' src={Murder} alt="" />
      </div>

      
      <div className="id">
        <span>3</span>
        <span>Sexual Assault</span>
        <img className='images' src={Sexual} alt="" />
      </div>

      
      <div className="id">
        <span>4</span>
        <span>Cybercrime</span>
        <img className='images' src={Cyber} alt="" />
      </div>

      
      <div className="id">
        <span>5</span>
        <span>kidnapping</span>
        <img className='images' src={Kidnapping} alt="" />
      </div>
    </div>
  )
}

export default Table