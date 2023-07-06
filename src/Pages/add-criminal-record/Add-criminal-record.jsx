import React from 'react'
import Finger from './../assets/fingerprint.png'
import Capture from './../assets/capture.png'


const AddCriminal = () => {
  return (
    <div className='criminal-record'>
      <p className='add-text'>Add a New Criminal record</p>

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

          <ul>
            <p>Height</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Eye Color</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Blood Group</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Hair Color</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Weight</p>
            <input type="text" />
          </ul>
        </div>

        <div className="add-box">
          <ul>
            <p>Crime Committed</p>
            <input type="text" />
          </ul>

          <ul>
            <p>Crime Date</p>
            <input type="date" />
          </ul>

          <ul>
            <p>Reported By</p>
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
        <button className='addBtn'>Add Record</button>
    </div>
  )
}

export default AddCriminal