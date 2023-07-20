import React from 'react'
import { Link } from 'react-router-dom'

const Select = () => {
  return (
    <div>
      <div className="login">
        <h2>LOGIN AS</h2>

        <Link to='/Login' className='loginLink'>ADMIN</Link>
        <Link to='/Login' className='loginLink'>OFFICER</Link>
      </div>
    </div>
  )
}

export default Select