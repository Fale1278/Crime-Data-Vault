

import React, { useState } from 'react';
import Finger from '../../../assets/fingerprint.png';
import Capture from '../../../assets/capture.png';

const AddPolice = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    age: '',
    maritalStatus: '',
    email: '',
    contactLine: '',
    address :'',
    DOB: '',
    gender: '',
    lga: '',
    town: '',
    state: '',
    nationality: '',
    height: '',
    weight: '',
    eyeColor: '',
    bloodGroup: '',
    haircolor: '',
    nextOfKin: '',
    nextOfKinContact: '',
    nextOfKinAddress: '',
    rank: '',
    appointmentDate: '',
    currentStation: '',
    policeId: '',
  });

  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setErrorPopupOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postFormData = async () => {
    try {
      const response = await fetch('https://crime-vault-database.onrender.com/admin/officersignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await postFormData();

      if (data) {
        console.log('Data posted successfully:', data);
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);
        // Optionally, you can reset the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          middleName: '',
          age: '',
          maritalStatus: '',
          contactLine: '',
          email: '',
          address :'',
          DOB: '',
          gender: '',
          lga: '',
          town: '',
          state: '',
          nationality: '',
          height: '',
          weight: '',
          eyeColor: '',
          bloodGroup: '',
          haircolor: '',
          nextOfKin: '',
          nextOfKinContact: '',
          nextOfKinAddress: '',
          policeId: '',
          rank: '',
          appointmentDate: '',
          currentStation: '',
        });
      } else {
        setErrorPopupOpen(true);
        setSuccessPopupOpen(false);
      }
    } catch (error) {
      console.error('Error posting data:', error);
      console.log(setFormData)
      setErrorPopupOpen(true);
      setSuccessPopupOpen(false);
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupOpen(false);
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div className='criminal-record'>
      <p className='add-text'>Register a New Police</p>
      <form className='add-container' onSubmit={handleFormSubmit}>
        <div className='add-box'>
          <ul style={{marginBottom: '3rem'}}>
            <h3>Police Details</h3>
          </ul>

          <ul>
            <p>First Name</p>
            <input type='text' name='firstName' onChange={handleInputChange} value={formData.firstName} />
          </ul>

          <ul>
            <p>Middle Name</p>
            <input type='text' name='middleName' onChange={handleInputChange} value={formData.middleName} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='lastName' onChange={handleInputChange} value={formData.lastName} />
          </ul>

          <ul>
            <p>Date of Birth</p>
            <input type='date' name='DOB' onChange={handleInputChange} value={formData.DOB} />
          </ul>

          <ul>
            <p>Age</p>
            <input type='text' name='age' onChange={handleInputChange} value={formData.age} />
          </ul>

          <ul>
            <p>Gender</p>
            <input type='text' name='gender' onChange={handleInputChange} value={formData.gender} />
          </ul>

          <ul>
            <p>Nationality</p>
            <input type='text' name='nationality' onChange={handleInputChange} value={formData.nationality} />
          </ul>

          <ul>
            <p>State</p>
            <input type='text' name='state' onChange={handleInputChange} value={formData.state} />
          </ul>

          <ul>
            <p>LGA</p>
            <input type='text' name='lga' onChange={handleInputChange} value={formData.lga} />
          </ul>

          <ul>
            <p>Town</p>
            <input type='text' name='town' onChange={handleInputChange} value={formData.town} />
          </ul>

          <ul>
            <p>Address</p>
            <input type='text' name='address' onChange={handleInputChange} value={formData.address} />
          </ul>

          <ul>
            <p>Marital Status</p>
            <input type='text' name='maritalStatus' onChange={handleInputChange} value={formData.maritalStatus} />
          </ul>

          <ul>
            <p>Height</p>
            <input type='text' name='height' onChange={handleInputChange} value={formData.height} />
          </ul>

          <ul>
            <p>Weight</p>
            <input type='text' name='weight' onChange={handleInputChange} value={formData.weight} />
          </ul>

          <ul>
            <p>Eye Color</p>
            <input type='text' name='eyeColor' onChange={handleInputChange} value={formData.eyeColor} />
          </ul>

          <ul>
            <p>Blood Group</p>
            <input type='text' name='bloodGroup' onChange={handleInputChange} value={formData.bloodGroup} />
          </ul>

          <ul>
            <p>Hair Color</p>
            <input type='text' name='haircolor' onChange={handleInputChange} value={formData.haircolor} />
          </ul>
        </div>


        <div className='add-box'>
          <ul style={{marginBottom: '3rem'} }>
            <h3>Contact Details</h3>
          </ul>

          <ul>
            <p>Email</p>
            <input type='email' name='email' onChange={handleInputChange} value={formData.email} />
          </ul>

          <ul>
            <p>Contact Line</p>
            <input type='text' name='contactLine' onChange={handleInputChange} value={formData.contactLine} />
          </ul>

          <ul>
            <p>Next of Kin</p>
            <input type='text' name='nextOfKin' onChange={handleInputChange} value={formData.nextOfKin} />
          </ul>

          <ul>
            <p>Next of Kin Contact</p>
            <input type='text' name='nextOfKinContact' onChange={handleInputChange} value={formData.nextOfKinContact} />
          </ul>

          <ul>
            <p>Next of Kin Address</p>
            <input type='text' name='nextOfKinAddress' onChange={handleInputChange} value={formData.nextOfKinAddress} />
          </ul>

          <ul style={{marginTop: '3rem'}}>
            <h3>More info</h3>
          </ul>

          <ul>
            <p>Police id </p>
            <input type='text' name='policeId' onChange={handleInputChange} value={formData.policeId} />
          </ul>

          <ul>
            <p>Appointment Date</p>
            <input type='date' name='appointmentDate' onChange={handleInputChange} value={formData.appointmentDate} />
          </ul>

          <ul>
            <p>Current Station</p>
            <input type='text' name='currentStation' onChange={handleInputChange} value={formData.currentStation} />
          </ul>

          <ul>
            <p>Police Rank</p>
            <input type='text' name='rank' onChange={handleInputChange} value={formData.rank} />
          </ul>

          
          <ul className='biometric'>
            <p>Biometric Capture</p>

            <div className='finger-capture'>
              <ul>
                <p>Finger Print</p>
                <img src={Finger} alt='' />
                {/* <input type='text' name='fingerPrints' onChange={handleInputChange} value={formData.fingerPrints} /> */}
              </ul>

              <ul>
                <p>Capture</p>
                <img src={Capture} alt='' />
                {/* <input type='file' name='facialCapture' onChange={handleInputChange} value={formData.facialCapture} /> */}
              </ul>
            </div>
          </ul>
         
        </div>

        <button type='submit' className='addBtn'>Add Record</button>
      </form>

      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Record Successfully Updated</h2>
            <button onClick={closeSuccessPopup}>Ok</button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {isErrorPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Error: Something went wrong</h2>
            <button onClick={closeErrorPopup}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPolice;