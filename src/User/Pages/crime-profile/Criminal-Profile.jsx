import React from 'react'

import { Link } from 'react-router-dom'

import Leo from '../../../assets/leo.png'
import Contact from '../../../assets/contact.svg'
import Finger from '../../../assets/fingerprint.png'
const CriminalProfile = () => {
  return (
    <div className='police-profile'>
      <div className='pol'>
        <div>
          <img src={Finger} alt="" /><span> Criminal Details</span>
        </div>

        <div className='back'><Link to='/viewCriminal' className='back'><i class='bx bx-left-arrow-alt'></i><e>Back</e ></Link></div>
      </div>

      <div className="police-details-container">
        <div className="police-details">
          <div className="police-details-box">
            
              <div className="kiri-kiri">
                <span>#Kiri-kiri prison inmate</span>
                <h1>Adamu Leo</h1>
              </div>
            <div className="external">
              <img src={Leo} alt="" />
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
            <p><b>Nationality: </b></p>
            <p><b>State: </b> </p>
            <p><b>LGA: </b> </p>
            <p><b>Blood Group: </b> </p>
            <p><b>Height: </b> </p>
            <p><b>Rank: </b> </p>
            <p><b>Marital Status: </b> </p>
            <p><b>Address: </b></p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Contact} alt="" /><span>Emergency Contact</span></h1>
          </div>

          <div className="external2">
            <p><b>First Name: </b></p>
            <p><b>Middle Name: </b> </p>
            <p><b>Last Name: </b> </p>
            <p><b>Contact Line: </b> </p>
            <p><b>Address: </b> </p>
            <p><b>Relationship: </b></p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Finger} alt="" /><span>Crime Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Crime: </b> </p>
            <p><b>Date Committed: </b></p>
            <p><b>Date Convicted: </b> </p>
            <p><b>Correctional Centre: </b></p>
            <p><b>Sentence: </b></p>
          </div>
        </div> 
      </div>

      <button className='update'>
        <Link to='/updateCriminal' className='link'>Update Record</Link>
      </button>
    </div>
  )
}

export default CriminalProfile