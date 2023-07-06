import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Dashboard from '../assets/dashboard.png'
import Criminal from '../assets/criminal.png'
import Visitors from '../assets/visitors.png'
import Police from '../assets/police.png'
import Crime from '../assets/crime.png'
import Logout from '../assets/logout.png'
import Officer from '../assets/officer.png'
import Arrow2  from '../assets/arrow2.png'
import Eye  from '../assets/eye.png'
import Plus  from '../assets/plus.png'

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
        <Link to='/' className="link">
          <li><img className='images' src={Visitors} alt="" /><span>Dashboard</span></li>
        </Link>
        <div>
          <li onClick={handleDashboardDropdownClick}><img className='images' src={Dashboard} alt="" /> <span>Criminal Record</span><img className='images' src={Arrow2} alt="" /></li>
          {isDashboardDropdownOpen&& (
            <ul>
              <Link to='/viewCriminal' className="link">         
                <li className='eyes'><img className='images' src={Eye} alt="" />View Criminal Record</li>
              </Link>

              <Link to='/addCriminal' className="link">
                <li className='eyes'><img className='images' src={Plus} alt="" />Add Criminal Record</li>
              </Link>
            </ul>
          )}
        </div>

        <div>
          <li onClick={handleCriminalDropdownClick}><img className='images' src={Criminal} alt="" /><span>Visitor's Record</span><img className='images' src={Arrow2} alt="" /></li>
          {isCriminalDropdownOpen && (
            <ul>
              <Link to='/viewVisitor' className="link">
                <li className='eyes'><img className='images' src={Eye} alt="" />View Visitor's Record</li>
              </Link>

              <Link to='/addVisitor' className="link">
                <li className='eyes'><img className='images' src={Plus} alt="" />Add Visitor's Record</li>
              </Link>
            </ul>
          )}
        </div>
        <Link to='/policeRecord' className="link">
          <li><img className='images' src={Police} alt="" /><a href="#"><span>Police Profile</span></a></li>
        </Link>

        <Link to='/crimeCategories' className="link">
          <li><img className='images' src={Crime} alt="" /><a href="#"><span>Crime Categories</span></a></li>
        </Link>

          <li><img className='images' src={Logout} alt="" /><a href="#"><span>Logout</span></a></li>
       
      </div>
    </div>
  )
}

export default Sidebar
