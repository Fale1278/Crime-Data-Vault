import React, { useState } from 'react';
import axios from 'axios';
import Finger from '../../../assets/fingerprint.png';
import Capture from '../../../assets/capture.png';

const AddCriminal = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    state: '',
    lga: '',
    town: '',
    height: '',
    eyeColor: '',
    bloodGroup: '',
    hairColor: '',
    weight: '',
    crimeCommitted: '',
    crimeDate: '',
    reportedBy: '',
    frequency: '',
    fingerPrints: '',
    facialCapture: '',
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://crime-database.onrender.com/officers/criminals', formData); // Replace with your actual backend API endpoint

      if (response.status === 200) {
        console.log('Data posted successfully:', response.data);
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);
        // Optionally, you can reset the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          dob: '',
          gender: '',
          state: '',
          lga: '',
          town: '',
          height: '',
          eyeColor: '',
          bloodGroup: '',
          hairColor: '',
          weight: '',
          crimeCommitted: '',
          crimeDate: '',
          reportedBy: '',
          frequency: '',
          fingerPrints: '',
          facialCapture: '',
        });
      } else {
        setErrorPopupOpen(true);
        setSuccessPopupOpen(false);
      }
    } catch (error) {
      console.error('Error posting data:', error);
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
      <p className='add-text'>Add a New Criminal record</p>
      <form className='add-container' onSubmit={handleFormSubmit}>
        <div className='add-box'>
          <ul>
            <p>First Name</p>
            <input type='text' name='firstName' onChange={handleInputChange} value={formData.firstName} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='lastName' onChange={handleInputChange} value={formData.lastName} />
          </ul>

          <ul>
            <p>Date of Birth</p>
            <input type='date' name='dob' onChange={handleInputChange} value={formData.dob} />
          </ul>

          <ul>
            <p>Gender</p>
            <input type='text' name='gender' onChange={handleInputChange} value={formData.gender} />
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
            <p>Height</p>
            <input type='text' name='height' onChange={handleInputChange} value={formData.height} />
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
            <input type='text' name='hairColor' onChange={handleInputChange} value={formData.hairColor} />
          </ul>

          <ul>
            <p>Weight</p>
            <input type='text' name='weight' onChange={handleInputChange} value={formData.weight} />
          </ul>
        </div>

        <div className='add-box'>
          <ul>
            <p>Crime Committed</p>
            <input type='text' name='crimeCommitted' onChange={handleInputChange} value={formData.crimeCommitted} />
          </ul>

          <ul>
            <p>Crime Date</p>
            <input type='date' name='crimeDate' onChange={handleInputChange} value={formData.crimeDate} />
          </ul>

          <ul>
            <p>Reported By</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul>
            <p>Frequency</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
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

export default AddCriminal;
