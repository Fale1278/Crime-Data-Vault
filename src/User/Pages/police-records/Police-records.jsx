

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Finger from '../../../assets/fingerprint.png';
import Eye2 from '../../../assets/eye2.png';

const PoliceRecords = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [policeRecords, setPoliceRecords] = useState([]);
  const [filteredPoliceRecords, setFilteredPoliceRecords] = useState([]);

  useEffect(() => {
    // Fetch the police records from the backend API
    const fetchPoliceRecords = async () => {
      try {
        const response = await fetch('https://crime-vault-database.onrender.com/admin/officers');
        if (response.ok) {
          const data = await response.json();
          setPoliceRecords(data);
        } else {
          console.error('Error fetching police records:', response.status);
        }
      } catch (error) {
        console.error('Error fetching police records:', error);
      }
    };
    fetchPoliceRecords();
  }, []);

  useEffect(() => {
    // Filter the police records based on the search query
    const filteredRecords = policeRecords.filter(
      (record) =>
        record.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.rank.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPoliceRecords(filteredRecords);
  }, [searchQuery, policeRecords]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <div className='view-record'>
      <div className="view-records-container">
        <div className="entries">
          <p><img src={Finger} alt="" /><span>Police Records</span></p>
          <p>Show 
            <select name="" id="">
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            entries
          </p>
        </div>

        <div className="entries2">
          <p><i className='bx bxs-filter-alt'></i>Filter Record</p>
          <ul>
            <span>Search: </span>
            <input type="text" value={searchQuery} onChange={handleSearchChange} />
          </ul>
        </div>
      </div>

      <table>
        <thead className='thead'>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>RANK</th>
            <th>DATE ASSIGNED</th>
            <th>VIEW</th>
          </tr>
        </thead>

        <tbody>
          {filteredPoliceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td><img src={record.image} alt="" style={{ width: '2rem', paddingTop: '2px' }} /></td>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.rank}</td>
              <td>{record.appointmentDate}</td>
              <td><Link to={`/policeProfile/${record.id}`}><img src={Eye2} alt="" /></Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className='skip'>
        <span><i className='bx bx-skip-previous'></i></span> <span>Prev | Next </span> <span><i className='bx bx-skip-next'></i></span>
      </p>
    </div>
  );
};

export default PoliceRecords;