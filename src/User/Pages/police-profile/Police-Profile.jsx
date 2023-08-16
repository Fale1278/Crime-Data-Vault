

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Police2 from '../../../assets/police2.png';
import Contact from '../../../assets/contact.svg';
import Finger from '../../../assets/fingerprint.png';

const PoliceProfile = () => {
  const [policeOfficer, setPoliceOfficer] = useState(null);
  const { ID } = useParams();

  useEffect(() => {
    // Fetch the police officer's details for the specific ID from the backend API
    const fetchPoliceOfficerDetails = async () => {
      try {
        const response = await fetch(`https://crime-vault-database.onrender.com/admin/officers/${ID}`);
        if (response.ok) {
          const data = await response.json();
          setPoliceOfficer(data);
        } else {
          console.error('Error fetching police officer details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching police officer details:', error);
      }
    };
    fetchPoliceOfficerDetails();  
  }, [ID]);

  if (!policeOfficer) {
    return <div>Loading...</div>;
  }

  return (
    <div className='police-profile'>
      <div className='pol'>
        <div>
          <img src={Police2} alt="" /><span>Police Details</span>
        </div>
        <div className='back'>
          <Link to='/policeRecord' className='back'>
            <i className='bx bx-left-arrow-alt'></i>Back
          </Link>
        </div>
      </div>

      <div className="police-details-container">
        <div className="police-details">
          <div className="police-details-box">
            <div className="kiri-kiri">
              <h1>{policeOfficer.firstName} {policeOfficer.lastName}</h1>
            </div>
            <div className="external">
              <img src={policeOfficer.image} alt="" />
            </div>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><i className='bx bxs-user'></i><span>Personal Details</span></h1>
          </div>
          <div className="external2">
            <p><b>First Name: </b>{policeOfficer.firstName}</p>
            <p><b>Middle Name: </b>{policeOfficer.middleName}</p>
            <p><b>Last Name: </b>{policeOfficer.lastName}</p>
            <p><b>Date Of Birth: </b> {policeOfficer.DOB}</p>
            <p><b>Age: </b>{policeOfficer.age}</p>
            <p><b>Sex: </b>{policeOfficer.gender}</p>
            <p><b>Nationality: </b>{policeOfficer.nationality}</p>
            
            <p><b>State: </b> {policeOfficer.state}</p>
            <p><b>LGA: </b> {policeOfficer.lga}</p>
            <p><b>Town: </b> {policeOfficer.town}</p>
            <p><b>Address: </b> {policeOfficer.address}</p>
            <p><b>Blood Group: {policeOfficer.bloodGroup}</b> </p>
            <p><b>Height: </b> {policeOfficer.height}</p>
            <p><b>Marital Status: </b> {policeOfficer.maritalStatus}</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Contact} alt="" /><span>Contact Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Email: </b> {policeOfficer.email}</p>
            <p><b>Contact Line: </b> {policeOfficer.contactLine}</p>
            <p><b>Address: </b> {policeOfficer.address}</p>
            <p><b>Next of Kin: </b> {policeOfficer.nextOfKin}</p>
            <p><b>Next of Address: </b> {policeOfficer.nextOfAddress}</p>
            <p><b>Next of Contact: </b> {policeOfficer.nextOfContact}</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Finger} alt="" /><span>Work Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Rank: </b> {policeOfficer.rank}</p>
            <p><b>Police ID: </b> {policeOfficer.policeId}</p>
            <p><b>Appointment Date: </b> {policeOfficer.appointmentDate}</p>
            <p><b>Current Station: </b> {policeOfficer.currentStation}</p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default PoliceProfile;