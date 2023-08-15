
import React, { useState } from 'react';
import Finger from '../../../assets/fingerprint.png';
import Capture from '../../../assets/capture.png';

const AddCriminal = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    age: '',
    Contactfirstname: '',
    Contactlastname : '',
    Contactmiddlename : '',
    contactaddress: '',
    middlename: '',
    maritalStatus: '',
    sentence: '',
    dateCommitted: '',
    dateConvicted: '',
    contactNumber: '',
    correctionalCenter: '',
    contactRelationship: '',
    contactLine: '',
    lastname: '',
    crime: '',
    address :'',
    DOB: '',
    occupation: '',
    gender: '',
    complexion: '',
    category: '',
    LGA: '',
    town: '',
    nationality: '',
    state: '',
    status: '',
    height: '',
    reportedBy:'',
    bloodGroup: '',
    weight: '',
    eyecolor: '',
    haircolor: '',
  });

  const [fingerPrintImage, setFingerPrintImage] = useState(null);
  const [captureImage, setCaptureImage] = useState(null);

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
      const response = await fetch('https://crime-vault-database.onrender.com/officers/addcriminal', {
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

  const uploadImages = async () => {
    const formDataWithImages = new FormData();
    formDataWithImages.append('fingerPrintImage', fingerPrintImage);
    formDataWithImages.append('captureImage', captureImage);
    // Append other form data
    for (const key in formData) {
      formDataWithImages.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://crime-vault-database.onrender.com/officers/addcriminal', {
        method: 'POST',
        body: formDataWithImages,
      });

      const responseData = await response.json();
      console.log('Images uploaded successfully:', responseData);
    } catch (error) {
      console.error('Error uploading images:', error);
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

        // Call the uploadImages function to handle image uploads
        await uploadImages();

        // Reset form fields
        setFormData({
          firstname: '',
          age: '',
          Contactfirstname: '',
          Contactlastname : '',
          Contactmiddlename : '',
          contactaddress: '',
          middlename: '',
          maritalStatus: '',
          sentence: '',
          dateCommitted: '',
          dateConvicted: '',
          contactNumber: '',
          correctionalCenter: '',
          contactRelationship: '',
          contactLine: '',
          lastname: '',
          occupation: '',
          crime: '',
          complexion: '',
          address :'',
          DOB: '',
          gender: '',
          category: '',
          LGA: '',
          town: '',
          state: '',
          nationality: '',
          status: '',
          height: '',
          reportedBy:'',
          bloodGroup: '',
          weight: '',
          eyecolor: '',
          haircolor: '',
        });

        setFingerPrintImage(null);
        setCaptureImage(null);
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
          <ul style={{marginBottom: '3rem'}}>
            <h3>Criminal's Details</h3>
          </ul>

          <ul>
            <p>First Name</p>
            <input type='text' name='firstname' onChange={handleInputChange} value={formData.firstname} />
          </ul>

          <ul>
            <p>Middle Name</p>
            <input type='text' name='middlename' onChange={handleInputChange} value={formData.middlename} />
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
            <input type='text' name='LGA' onChange={handleInputChange} value={formData.LGA} />
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
            <p>Occupation</p>
            <input type='text' name='occupation' onChange={handleInputChange} value={formData.occupation} />
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
            <input type='text' name='eyecolor' onChange={handleInputChange} value={formData.eyecolor} />
          </ul>

          <ul>
            <p>Skin Color</p>
            <input type='text' name='complexion' onChange={handleInputChange} value={formData.complexion} />
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
            <h3>Crime Details</h3>
          </ul>

          <ul>
            <p>Crime Committed</p>
            <input type='text' name='crime' onChange={handleInputChange} value={formData.crime} />
          </ul>

          <ul>
            <p>Category</p>
            <input type='text' name='category' onChange={handleInputChange} value={formData.category} />
          </ul>

          <ul>
            <p>Crime Date</p>
            <input type='date' name='dateCommitted' onChange={handleInputChange} value={formData.dateCommitted} />
          </ul>

          <ul>
            <p>Date Convicted</p>
            <input type='date' name='dateConvicted' onChange={handleInputChange} value={formData.dateConvicted} />
          </ul>

          <ul>
            <p>Correctional Centre</p>
            <input type='text' name='correctionalCenter' onChange={handleInputChange} value={formData.correctionalCenter} />
          </ul>

          <ul>
            <p>Sentence</p>
            <input type='text' name='sentence' onChange={handleInputChange} value={formData.sentence} />
          </ul>

          <ul>
            <p>Status</p>
            <input type='text' name='status' onChange={handleInputChange} value={formData.status} />
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
            <input type='text' name='Contactfirstname' onChange={handleInputChange} value={formData.Contactfirstname} />
          </ul>

          <ul>
            <p>Middle Name</p>
            <input type='text' name='Contactmiddlename' onChange={handleInputChange} value={formData.Contactmiddlename} />
          </ul>

          <ul>
            <p>Last Name</p>
            <input type='text' name='Contactlastname' onChange={handleInputChange} value={formData.Contactlastname} />
          </ul>

          <ul>
            <p>Contact Line</p>
            <input type='text' name='contactLine' onChange={handleInputChange} value={formData.contactLine} />
          </ul>

          <ul>
            <p>Address</p>
            <input type='text' name='contactaddress' onChange={handleInputChange} value={formData.contactaddress} />
          </ul>

          <ul>
            <p>Relationship</p>
            <input type='text' name='contactRelationship' onChange={handleInputChange} value={formData.contactRelationship} />
          </ul>
          
          {/* Finger Print */}
          <ul className='biometric'>
            <p>Finger Print</p>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => setFingerPrintImage(e.target.files[0])}
            />
            {fingerPrintImage && (
              <img src={URL.createObjectURL(fingerPrintImage)} alt='' />
            )}
          </ul>

          {/* Capture */}
          <ul className='biometric'>
            <p>Capture</p>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => setCaptureImage(e.target.files[0])}
            />
            {captureImage && (
              <img src={URL.createObjectURL(captureImage)} alt='' />
            )}
          </ul>
        </div>

        <button type='submit' className='addBtn'>Add Record</button>
      </form>
      
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
