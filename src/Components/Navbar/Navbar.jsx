import React from 'react'
import Officer2 from '../../assets/Officer2.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <ul className='search'><i class='bx bx-search'></i><input type="text" placeholder='Search' /></ul>
      <ul className='officer2'><span>Officer</span> <img src={Officer2} alt="" /></ul>
    </div>
  )
}

export default Navbar
