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
            <p><b>First Name: </b> Leo</p>
            <p><b>Middle Name: </b>Jesse</p>
            <p><b>Last Name: </b> Adamu</p>
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
            <h1><img src={Contact} alt="" /><span>Emergency Contact</span></h1>
          </div>

          <div className="external2">
            <p><b>First Name: </b> Joy</p>
            <p><b>Middle Name: </b> Musu</p>
            <p><b>Last Name: </b> James</p>
            <p><b>Contact Line: </b> 09066998956</p>
            <p><b>Address: </b> Behind Toro</p>
            <p><b>Relationship: </b> Mother</p>
          </div>
        </div>

        <div className="police-details2">
          <div className="police-details2-box">
            <h1><img src={Finger} alt="" /><span>Work Details</span></h1>
          </div>

          <div className="external2">
            <p><b>Crime: </b> Cybercrime</p>
            <p><b>Date Committed: </b>10-02-2022</p>
            <p><b>Date Convicted: </b> 20-02-2022</p>
            <p><b>Correctional Centre: </b> Kiri-Kiri Correctional Prison</p>
            <p><b>Sentence: </b> 3 years</p>
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