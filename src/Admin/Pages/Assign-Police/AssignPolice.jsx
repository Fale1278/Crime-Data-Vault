import React, { useState } from 'react';

const AddPolice = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    lga: '',
    rank: '',
    assigningDate: '',
    station: '',
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

  const assignUser = async () => {
    try {
      const data = await postFormData();

      if (data) {
        console.log('Data posted successfully:', data);
        setSuccessPopupOpen(true);
        setErrorPopupOpen(false);
        // Optionally, you can reset the form after successful assignment
        setFormData({
          firstname: '',
          lastname: '',
          middlename: '',
          lga: '',
          rank: '',
          assigningDate: '',
          station: '',
        });
      } else {
        setErrorPopupOpen(true);
        setSuccessPopupOpen(false);
      }
    } catch (error) {
      console.error('Error assigning user:', error);
      setErrorPopupOpen(true);
      setSuccessPopupOpen(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await assignUser();

      if (data) {
        // Additional logic specific to assigning users can be added here
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const closeSuccessPopup = () => {
    setSuccessPopupOpen(false);
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div className='criminal-police'>
      <p style={{textAlign: 'center', padding: '2rem'}}>Assign Officer To Station</p>
      
      <form className='add-container2' onSubmit={handleFormSubmit}>
        <div className='add-box2'>
          
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
            <p>Officer Rank</p>
            <input type='date' name='rank' onChange={handleInputChange} value={formData.rank} />
          </ul>

          <ul>
            <p>Assigning Date</p>
            <input type='date' name='assigningDate' onChange={handleInputChange} value={formData.assigningDate} />
          </ul>

          <ul>
            <p>LGA</p>
            <input type='text' name='lga' onChange={handleInputChange} value={formData.lga} />
          </ul>

          <ul>
            <p>Station</p>
            <input type='text' name='station' onChange={handleInputChange} value={formData.station} />
          </ul>

          <button type='submit' className='addBtn2'>Assign Officer</button>
        </div>
      </form>

      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Officer Assigned Successfully</h2>
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
