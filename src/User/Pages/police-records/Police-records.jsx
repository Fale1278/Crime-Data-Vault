import React from 'react'

import { Link } from 'react-router-dom'

import Finger from '../../../assets/fingerprint.png'
import Desmond from '../../../assets/desmond.png'
import Eye2 from '../../../assets/eye2.png'


const PoliceRecords = () => {
  return (
    <div className='view-record'>
      <div className="view-records-container">
        <div className="entries">
          <p><img src={Finger} alt="" /><span>Police Records</span></p>
          <p>Show 
            <select name="" id="">
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            entries
          </p>
        </div>

        <div className="entries2">
          <p><i class='bx bxs-filter-alt'></i>Filter Record</p>
          <ul><span>Search: </span><input type="text" /></ul>
        </div>
      </div>

      <table>
        <thead className='thead'>
          <th>ID</th>
          <th>IMAGE</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>RANK</th>
          <th>DATE ASSIGNED</th>
          <th>VIEW</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><Link to='/policeProfile'><img src={Eye2} alt="" /></Link></td>
          </tr>

          <tr>
            <td>2</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>3</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>4</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>5</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>6</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>7</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>8</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>9</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>

          <tr>
            <td>10</td>
            <td><img src={Desmond} alt="" /></td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>SERGENT</td>
            <td>13-04-2023</td>
            <td><img src={Eye2} alt="" /></td>
          </tr>
        </tbody>
      </table>

      <p className='skip'><span><i class='bx bx-skip-previous'></i></span> <span>Prev | Next </span> <span><i class='bx bx-skip-next'></i></span></p>

    </div>
  )
}

export default PoliceRecords