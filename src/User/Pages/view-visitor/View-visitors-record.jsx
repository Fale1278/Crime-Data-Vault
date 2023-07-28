import React from 'react'
import Visitor from '../../../assets/visitors.svg'
import Desmond from '../../../assets/desmond.png'
import Eye2 from '../../../assets/eye2.png'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'


const ViewVisitors = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [visitorRecords, setVisitorRecord] = useState([]);
  const [filteredVisitorRecord, setFilteredVisitorRecord] = useState([]);

  useEffect(() => {
    // Fetch the criminal records from the backend API
    const fetchCriminalRecords = async () => {
      try {
        const response = await fetch('https://crime-vault-database.onrender.com/officers/criminals'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setVisitorRecord(data);
        } else {
          console.error('Error fetching criminal records:', response.status);
        }
      } catch (error) {
        console.error('Error fetching criminal records:', error);
      }
    };
    fetchCriminalRecords();
  }, []);

  useEffect(() => {
    // Filter the criminal records based on the search query
    const filteredRecords = visitorRecords.filter(
      (record) =>
        record.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.crime.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVisitorRecord(filteredRecords);
  }, [searchQuery, visitorRecords]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };
  return (
    <div className='view-record'>
      <div className="view-records-container">
        <div className="entries">
          <p><img src={Visitor} alt="" /><span>Visitors Records</span></p>
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
          <p><i class='bx bxs-filter-alt'></i>Filter Record</p>
          <ul><span>Search: </span><input type="text" /></ul>
        </div>
      </div>

      <table>
        <thead className='thead'>
          <th>ID</th>
          <th>IMAGE</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>GENDER</th>
          <th>VISITED</th>
          <th>RELATIONSHIP</th>
          <th>VIEW</th>
        </thead>

        <tbody>
        {filteredVisitorRecord.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td><img src={record.image} alt="" style={{width: '2rem'}}/></td>
              <td>{record.firstname}</td>
              <td>{record.lastname}</td>
              <td>{record.gender}</td>
              <td>{record.crime}</td>
              <td>{record.dateCommitted}</td>
              <td><Link to='/criminalProfile'><img src={Eye2} alt="" /></Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className='skip'><span><i class='bx bx-skip-previous'></i></span> <span>Prev | Next </span> <span><i class='bx bx-skip-next'></i></span></p>

    </div>
  )
}

export default ViewVisitors

