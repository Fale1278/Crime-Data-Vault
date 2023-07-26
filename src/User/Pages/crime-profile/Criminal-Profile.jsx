import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Leo from '../../../assets/leo.png';
import Contact from '../../../assets/contact.svg';
import Finger from '../../../assets/fingerprint.png';

const CriminalProfile = () => {
  const [criminalRecords, setCriminalRecords] = useState([]);

  useEffect(() => {
    // Fetch the criminal records from the backend API
    const fetchCriminalRecords = async () => {
      try {
        const response = await fetch('https://crime-vault-database.onrender.com/officers/addcriminal'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setCriminalRecords(data);
        } else {
          console.error('Error fetching criminal records:', response.status);
        }
      } catch (error) {
        console.error('Error fetching criminal records:', error);
      }
    };
    fetchCriminalRecords();
  }, []);

  return (
    <div className='police-profile'>
      <div className='pol'>
        <div>
          <img src={Finger} alt="" /><span> Criminal Details</span>
        </div>

        <div className='back'>
          <Link to='/viewCriminal' className='back'>
            <i class='bx bx-left-arrow-alt'></i><e>Back</e >
          </Link>
        </div>
      </div>

      {/* Display criminal records */}
      {criminalRecords.map((record) => (
        <div key={record.id} className="police-details-container">
          <div className="police-details">
            <div className="police-details-box">
              <div className="kiri-kiri">
                <span>#Kiri-kiri prison inmate</span>
                <h1>{record.name}</h1>
              </div>
              <div className="external">
                <img src={Leo} alt="" />
              </div>
            </div>
          </div>

          <div className="police-details2">
            <div className="police-details2-box">
              <h1><i class='bx bxs-user'></i><span>Personal Details</span></h1>
            </div>
            <div className="external2">
              <p><b>First Name: </b>{record.firstName}</p>
              <p><b>Middle Name: </b>{record.middleName}</p>
              <p><b>Last Name: </b>{record.lastName}</p>
              <p><b>Age: </b>{record.age}</p>
              <p><b>Sex: </b>{record.gender}</p>
              <p><b>Nationality: </b>{record.nationality}</p>
              <p><b>State: </b>{record.state}</p>
              <p><b>LGA: </b>{record.LGA}</p>
              <p><b>Blood Group: </b>{record.bloodGroup}</p>
              <p><b>Height: </b>{record.height}</p>
              <p><b>Occupation: </b>{record.occupation}</p>
              <p><b>Marital Status: </b>{record.maritalStatus}</p>
              <p><b>Address: </b>{record.address}</p>
            </div>
          </div>

          <div className="police-details2">
            <div className="police-details2-box">
              <h1><img src={Contact} alt="" /><span>Emergency Contact</span></h1>
            </div>
            <div className="external2">
              <p><b>First Name: </b>{record.Contactfirstname}</p>
              <p><b>Middle Name: </b>{record.Contactmiddlename}</p>
              <p><b>Last Name: </b>{record.Contactlastname}</p>
              <p><b>Contact Line: </b>{record.contactLine}</p>
              <p><b>Address: </b>{record.contactaddress}</p>
              <p><b>Relationship: </b>{record.contactRelationship}</p>
            </div>
          </div>

          <div className="police-details2">
            <div className="police-details2-box">
              <h1><img src={Finger} alt="" /><span>Crime Details</span></h1>
            </div>
            <div className="external2">
              <p><b>Crime: </b>{record.crime}</p>
              <p><b>Date Committed: </b>{record.dateCommitted}</p>
              <p><b>Date Convicted: </b>{record.dateConvicted}</p>
              <p><b>Correctional Centre: </b>{record.correctionalCentre}</p>
              <p><b>Sentence: </b>{record.sentence}</p>
            </div>
          </div>
        </div>
      ))}

      <button className='update'>
        <Link to='/updateCriminal' className='link'>Update Record</Link>
      </button>
    </div>
  );
};

export default CriminalProfile;
