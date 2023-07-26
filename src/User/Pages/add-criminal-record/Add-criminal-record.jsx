import React, { useState } from 'react';
import Finger from '../../../assets/fingerprint.png';
import Capture from '../../../assets/capture.png';

const AddCriminal = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    DOB: '',
    crime: '',
    occupation: '',
    phoneNumber: '',
    town: '',
    address: '',
    state: '',
    height: '',
    eyecolor: '',
    weight: '',
    gender: '',
    status: '',
    haircolor: '',
    LGA: '',
    category: '',
    bloodGroup: '',
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
      const response = await fetch('https://crime-database.onrender.com/officers/addcriminal', {
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
          firstname: '',
          lastname: '',
          DOB: '',
          crime: '',
          occupation: '',
          phoneNumber: '',
          town: '',
          address: '',
          state: '',
          height: '',
          eyecolor: '',
          weight: '',
          gender: '',
          status: '',
          haircolor: '',
          LGA: '',
          category: '',
          bloodGroup: '',
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
      <p className='add-text'>Add a New Criminal record</p>
      <form className='add-container' onSubmit={handleFormSubmit}>
        <div className='add-box'>
          <ul style={{marginBottom: '3rem'}}>
            <h3>Criminal's Details</h3>
          </ul>

          <ul>
            <p>First Name</p>
            <input type='text' name='firstname' onChange={handleInputChange} value={formData.firstname} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='lastname' onChange={handleInputChange} value={formData.lastname} />
          </ul>

          <ul>
            <p>Date of Birth</p>
            <input type='date' name='DOB' onChange={handleInputChange} value={formData.DOB} />
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
            <input type='text' name='LGA' onChange={handleInputChange} value={formData.LGA} />
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
            <input type='text' name='eyecolor' onChange={handleInputChange} value={formData.eyecolor} />
          </ul>

          <ul>
            <p>Blood Group</p>
            <input type='text' name='bloodGroup' onChange={handleInputChange} value={formData.bloodGroup} />
          </ul>

          <ul>
            <p>Hair Color</p>
            <input type='text' name='haircolor' onChange={handleInputChange} value={formData.haircolor} />
          </ul>

          <ul>
            <p>Weight</p>
            <input type='text' name='weight' onChange={handleInputChange} value={formData.weight} />
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


        <div className='add-box'>
          <ul style={{marginBottom: '3rem'} }>
            <h3>Crime Details</h3>
          </ul>

          <ul>
            <p>Crime Committed</p>
            <input type='text' name='crime' onChange={handleInputChange} value={formData.crime} />
          </ul>

          <ul>
            <p>Crime Date</p>
            <input type='date' name='crimeDate' onChange={handleInputChange} value={formData.crimeDate} />
          </ul>

          <ul>
            <p>Date Convicted</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul>
            <p>Correctional Centre</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul>
            <p>Sentence</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul>
            <p>Reported By</p>
            <input type='text' name='reportedBy' onChange={handleInputChange} value={formData.reportedBy} />
          </ul>

          <ul>
            <p>Frequency</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
          </ul>

          <ul style={{marginTop: '3rem'}}>
            <h3>Emergency Contact</h3>
          </ul>

          <ul>
            <p>First Name</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
          </ul>

          <ul>
            <p>Middle Name</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
          </ul>

          <ul>
            <p>Contact Line</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
          </ul>

          <ul>
            <p>Address</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
          </ul>

          <ul>
            <p>Relationship</p>
            <input type='text' name='frequency' onChange={handleInputChange} value={formData.frequency} />
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
