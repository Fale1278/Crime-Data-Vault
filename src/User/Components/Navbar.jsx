import React, { useState, useEffect } from 'react';
import Officer2 from '../../assets/officer2.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const policeProfile = location.pathname === '/policeProfile';
  const criminalProfile = location.pathname === '/criminalProfile';
  const visitorProfile = location.pathname === '/visitorProfile';

  const [updateRequests, setUpdateRequests] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchUpdateRequests(); // Fetch update requests when the component mounts
  }, []);

  const fetchUpdateRequests = async () => {
    try {
      const response = await fetch('https://crime-vault-database.onrender.com/admin/officers');
      if (response.ok) {
        const data = await response.json();
        setUpdateRequests(data);
      } else {
        console.error('Failed to fetch update requests');
      }
    } catch (error) {
      console.error('Error fetching update requests', error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='Navbar'>
      <p className={`bell ${updateRequests.length > 0 ? 'has-updates' : ''}`} onClick={toggleDropdown}>
        <FaBell />
        {updateRequests.length > 0 && <span className='notification-badge'>{updateRequests.length}</span>}
      </p>
      {isDropdownOpen && (
        <div className='dropdown'>
          {updateRequests.map(request => (
            <div key={request.id} className='dropdown-item'>
              <p>{request.message}</p>
            </div>
          ))}
        </div>
      )}
      {!policeProfile && !criminalProfile && !visitorProfile && (
        <ul className='search'>
          <AiOutlineSearch style={{ fontSize: '22px' }} />
          <input type="text" placeholder='Search' />
        </ul>
      )}
      <ul className='officer2'>
        <span>Officer</span> <img src={Officer2} alt="" />
      </ul>
    </div>
  );
};

export default Navbar;
