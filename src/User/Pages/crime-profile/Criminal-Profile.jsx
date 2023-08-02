// CriminalProfile.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Leo from '../../../assets/leo.png';
import Contact from '../../../assets/contact.svg';
import Finger from '../../../assets/fingerprint.png';

const CriminalProfile = () => {
  const [criminalRecord, setCriminalRecord] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch the criminal record for the specific id from the backend API
    const fetchCriminalRecord = async () => {
      try {
        const response = await fetch(`https://crime-vault-database.onrender.com/officers/criminals/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCriminalRecord(data);
        } else {
          console.error('Error fetching criminal record:', response.status);
        }
      } catch (error) {
        console.error('Error fetching criminal record:', error);
      }
    };
    fetchCriminalRecord();
  }, [id]);

  if (!criminalRecord) {
    return <div style={{marginRight: '18rem'}}>Loading...</div>;
  }

  return (
    <div className='police-profile'>
      <div className='pol'>
        <div>
          <img src={Finger} alt="" /><span> Criminal Details</span>
        </div>

        <div className='back'>
          <Link to='/viewCriminal' className='back'>
            <i className='bx bx-left-arrow-alt'></i><e>Back</e >
          </Link>
        </div>
      </div>

      <div key={criminalRecord.id} className="police-details-container">
        <div className="police-details">
          <div className="police-details-box">
            <div className="kiri-kiri">
              <span>#Kiri-kiri prison inmate</span>
              <h1>{criminalRecord.name}</h1>
            </div>
            <div className="external">
              <img src={Leo} alt="" />
            </div>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><i className='bx bxs-user'></i><span>Personal Details</span></h1>
          </div>
          <div className="external2">
            <p><b>First Name: </b>{criminalRecord.firstName}</p>
            <p><b>Middle Name: </b>{criminalRecord.middleName}</p>
            <p><b>Last Name: </b>{criminalRecord.lastName}</p>
            <p><b>Age: </b>{criminalRecord.age}</p>
            <p><b>Sex: </b>{criminalRecord.gender}</p>
            <p><b>Nationality: </b>{criminalRecord.nationality}</p>
            <p><b>State: </b>{criminalRecord.state}</p>
            <p><b>LGA: </b>{criminalRecord.LGA}</p>
            <p><b>Blood Group: </b>{criminalRecord.bloodGroup}</p>
            <p><b>Height: </b>{criminalRecord.height}</p>
            <p><b>Occupation: </b>{criminalRecord.occupation}</p>
            <p><b>Marital Status: </b>{criminalRecord.maritalStatus}</p>
            <p><b>Address: </b>{criminalRecord.address}</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Contact} alt="" /><span>Emergency Contact</span></h1>
          </div>
          <div className="external2">
            <p><b>First Name: </b>{criminalRecord.Contactfirstname}</p>
            <p><b>Middle Name: </b>{criminalRecord.Contactmiddlename}</p>
            <p><b>Last Name: </b>{criminalRecord.Contactlastname}</p>
            <p><b>Contact Line: </b>{criminalRecord.contactLine}</p>
            <p><b>Address: </b>{criminalRecord.contactaddress}</p>
            <p><b>Relationship: </b>{criminalRecord.contactRelationship}</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Finger} alt="" /><span>Crime Details</span></h1>
          </div>
          <div className="external2">
            <p><b>Crime: </b>{criminalRecord.crime}</p>
            <p><b>Date Committed: </b>{criminalRecord.dateCommitted}</p>
            <p><b>Date Convicted: </b>{criminalRecord.dateConvicted}</p>
            <p><b>Correctional Centre: </b>{criminalRecord.correctionalCentre}</p>
            <p><b>Sentence: </b>{criminalRecord.sentence}</p>
          </div>
        </div>
      </div>

      <button className='update'>
        <Link to='/updateCriminal' className='link'>Update Record</Link>
      </button>
    </div>
  );
};

export default CriminalProfile;
