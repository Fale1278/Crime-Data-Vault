import React from 'react'
import Finger from '../../../assets/fingerprint.png'
import Capture from '../../../assets/capture.png'

import { useState } from 'react'


const UpdateVisitor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };


  return (
    <div className='criminal-record'>
      <p className='add-text'>Update Visitor's  record</p>

      <div className="add-container">
        <div className="add-box">
          <ul>
            <p>First Name</p>
            <input type="text" />
          </ul>

          <ul>
            <p>First Name</p>
            <input type="text" />
          </ul>

          <ul>
            <p>D.O.B</p>
            <input type="date" />
          </ul>

          <ul>
            <p>Gender</p>
            <input type="text" />
          </ul>

          <ul>
            <p>State</p>
            <input type="text" />
          </ul>

          <ul>
            <p>LGA</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Town</p>
            <input type="text" />
          </ul>
        </div>

        <div className="add-box">
          <ul>
            <p>Inmate Visited</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Last Visit Date</p>
            <input type="date" />
          </ul>

          <ul>
            <p>Relationship with inmate</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Frequency</p>
            <input type="text" />
          </ul>

          <ul className='biometric'>
            <p>Biometric Capture</p>

            <div className="finger-capture">
              <ul>
                <p>Finger Print</p>
                <img src={Finger} alt="" />
              </ul>

              <ul> 
                <p>Capture</p>
                <img src={Capture} alt="" />
              </ul>
            </div>
          </ul>
        </div>

      </div>
        <button className='addBtn' onClick={openPopup}>Update Record</button>
        {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Record Successfully Updated</h2>
            <button onClick={closePopup}>Ok</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdateVisitor