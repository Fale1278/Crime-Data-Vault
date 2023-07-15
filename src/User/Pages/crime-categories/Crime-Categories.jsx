import React from 'react'
import Finger from '../../../assets/fingerprint.png'


const CrimeCategory = () => {
  return (
    <div className='view-record'>
      <div className="view-records-container">
        <div className="entries">
          <p><img src={Finger} alt="" /><span>Criminal Records</span></p>
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

      <table className='table2'>
        <thead className='thead2'>
          <th>ID</th>
          <th>IMAGE</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>Male</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>Male</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>Male</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>Male</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>Male</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Desmond</td>
            <td>Fon Gwom</td>
            <td>Male</td>
          </tr>

          
        </tbody>
      </table>

      <p className='skip'><span><i class='bx bx-skip-previous'></i></span> <span>Prev | Next </span> <span><i class='bx bx-skip-next'></i></span></p>

    </div>
  )
}

export default CrimeCategory