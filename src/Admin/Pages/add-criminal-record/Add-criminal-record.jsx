import React, { useState } from 'react';
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
      const response = await fetch('https://crime-database.onrender.com/officers/criminals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log('Data posted successfully:', data);
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
      // Optionally, you can show a success popup here
    } catch (error) {
      console.error('Error posting data:', error);
      // Optionally, you can show an error popup here
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
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
                <input type='text' name='fingerPrints' onChange={handleInputChange} value={formData.fingerPrints} />
              </ul>

              <ul>
                <p>Capture</p>
                <input type='text' name='facialCapture' onChange={handleInputChange} value={formData.facialCapture} />
              </ul>
            </div>
          </ul>
        </div>

        {/* Add a button to submit the form */}
        <button type='submit'>Add Record</button>
      </form>

      {/* Add a popup to show success message */}
      {isOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Record Successfully Updated</h2>
            <button onClick={closePopup}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCriminal;
