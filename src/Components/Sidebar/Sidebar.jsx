import React, {useState} from 'react'
import Dashboard from '../../assets/dashboard.png'
import Criminal from '../../assets/criminal.png'
import Visitors from '../../assets/visitors.png'
import Police from '../../assets/police.png'
import Crime from '../../assets/crime.png'
import Logout from '../../assets/logout.png'
import Officer from '../../assets/officer.png'


const Sidebar = () => {
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isCriminalDropdownOpen, setIsCriminalDropdownOpen] = useState(false);

  const handleDashboardDropdownClick = () => {
    setIsDashboardDropdownOpen(!isDashboardDropdownOpen);
  };

  const handleCriminalDropdownClick = () => {
    setIsCriminalDropdownOpen(!isCriminalDropdownOpen);
  };

  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        <ul className='officer'><img src={Officer} alt="" /><span>Officer Salihu Musa</span></ul>
        <div>
          <li onClick={handleDashboardDropdownClick}><img className='images' src={Dashboard} alt="" /> <span>Dashboard</span></li>
          {isDashboardDropdownOpen&& (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
            </ul>
          )}
        </div>

        <div>
          <li onClick={handleCriminalDropdownClick}><img className='images' src={Criminal} alt="" /><span>Criminal Record</span></li>
          {isCriminalDropdownOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
            </ul>
          )}
        </div>

        <li><img className='images' src={Visitors} alt="" /><a href="#"><span>Visitors Record</span></a></li>
        <li><img className='images' src={Police} alt="" /><a href="#"><span>Police Profile</span></a></li>
        <li><img className='images' src={Crime} alt="" /><a href="#"><span>Crime Categories</span></a></li>
        <li><img className='images' src={Logout} alt="" /><a href="#"><span>Logout</span></a></li>

      </div>
    </div>
  )
}

export default Sidebar
