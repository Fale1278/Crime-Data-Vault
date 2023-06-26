import React, {useState} from 'react'
import Dashboard from '../../assets/dashboard.png'
import Criminal from '../../assets/criminal.png'
import Visitors from '../../assets/visitors.png'
import Police from '../../assets/police.png'
import Crime from '../../assets/crime.png'
import Logout from '../../assets/logout.png'
import Officer from '../../assets/officer.png'


const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        <ul className='officer'><img src={Officer} alt="" /><span>Officer Salihu Musa</span></ul>
        <li><img className='images' src={Dashboard} alt="" /><a href="#"><span>Dashboard</span></a></li>
        <li><img className='images' src={Criminal} alt="" /><a href="#"><span>Criminal Record</span></a></li>
        <li><img className='images' src={Visitors} alt="" /><a href="#"><span>Visitors Record</span></a></li>
        <li><img className='images' src={Police} alt="" /><a href="#"><span>Police Profile</span></a></li>
        <li><img className='images' src={Crime} alt="" /><a href="#"><span>Crime Categories</span></a></li>
        <li><img className='images' src={Logout} alt="" /><a href="#"><span>Logout</span></a></li>

        <div>
      <button onClick={handleDropdownClick}>Toggle Dropdown</button>
      {isDropdownOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
      </div>
    </div>
  )
}

export default Sidebar
