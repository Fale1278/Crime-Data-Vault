import React from 'react'
import Police2 from '../../../assets/police2.png'
import Jesse from '../../../assets/jesse.png'
import Contact from '../../../assets/contact.svg'
import Finger from '../../../assets/fingerprint.png'

import { Link } from 'react-router-dom'

const VisitorProfile = () => {
  return (
    <div className='police-profile'>
      <div className='pol'>
        <div>
          <img src={Police2} alt="" /><span>Visitor Details</span>
        </div>

        <div className='back'><Link to='/viewVisitor' className='back'><i class='bx bx-left-arrow-alt'></i>Back</Link></div>
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
            <p><b>First Name: </b> </p>
            <p><b>Middle Name: </b></p>
            <p><b>Last Name: </b> </p>
            <p><b>Age: </b> </p>
            <p><b>Sex: </b> </p>
            <p><b>Nationality: </b> </p>
            <p><b>State: </b> </p>
            <p><b>LGA: </b> </p>
            <p><b>Blood Group: </b> </p>
            <p><b>Height: </b> </p>
            <p><b>Rank: </b> </p>
            <p><b>Marital Status: </b> </p>
            <p><b>Address: </b> </p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Contact} alt="" /><span>Contact Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Contact Line: </b></p>
            <p><b>Address: </b> </p>
            <p><b>Next of Kin: </b></p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Finger} alt="" /><span>Work Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Police ID: </b> </p>
            <p><b>Appointment Date: </b></p>
            <p><b>Current Station: </b> </p>
          </div>
        </div> 
      </div>

      <button className='update'>
        <Link to='/updateVisitor' className='link'>Update Record</Link>
      </button>
    </div>
  )
}

export default VisitorProfile