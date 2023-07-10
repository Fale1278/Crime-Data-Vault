import React from 'react'
import Finger from '../../assets/fingerprint.png'
import Capture from '../../assets/capture.png'


const UpdateCriminal = () => {
  return (
    <div className='criminal-record'>
      <p className='add-text'>Update Criminal's  record</p>

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
        <button className='addBtn'>Update Record</button>
    </div>
  )
}

export default UpdateCriminal