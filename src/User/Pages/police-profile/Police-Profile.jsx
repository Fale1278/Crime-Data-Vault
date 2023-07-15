import React from 'react'
import { Link } from 'react-router-dom'

import Police2 from '../../../assets/police2.png'
import Jesse from '../../../assets/jesse.png'
import Contact from '../../../assets/contact.svg'
import Finger from '../../../assets/fingerprint.png'
const PoliceProfile = () => {
  return (
    <div className='police-profile'>
      <div className='pol'>
     
            
          <div>
            <img src={Police2} alt="" /><span>Police Details</span>
          </div>

          <div className='back'><Link to='/policeRecord' className='back'><i class='bx bx-left-arrow-alt'></i>Back</Link></div>
        
      </div>

      <div className="police-details-container">
        <div className="police-details">
          <div className="police-details-box">
            <div className="kiri-kiri">
              <h1>Jesse Kanadi</h1>
            </div>
            <div className="external">
              <img src={Jesse} alt="" />
            </div>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><i class='bx bxs-user'></i><span>Personal Details</span></h1>
          </div>

          <div className="external2">
            <p><b>First Name: </b> Jesse</p>
            <p><b>Middle Name: </b>Jesse</p>
            <p><b>Last Name: </b> Kanadi</p>
            <p><b>Age: </b> 21</p>
            <p><b>Sex: </b> Male</p>
            <p><b>Nationality: </b> Nigerian</p>
            <p><b>State: </b> Borno</p>
            <p><b>LGA: </b> Hawul</p>
            <p><b>Blood Group: </b> B+</p>
            <p><b>Height: </b> 178 CM</p>
            <p><b>Rank: </b> Sergeant</p>
            <p><b>Marital Status: </b> Single</p>
            <p><b>Address: </b> GGSS</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Contact} alt="" /><span>Contact Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Contact Line: </b> 09123173100</p>
            <p><b>Address: </b> Behind Toro Government Secondary School Toro</p>
            <p><b>Next of Kin: </b> Musa Gyang</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Finger} alt="" /><span>Work Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Police ID: </b> NPF123456</p>
            <p><b>Appointment Date: </b>10-02-2022</p>
            <p><b>Current Station: </b> Anglo Jos Station</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default PoliceProfile