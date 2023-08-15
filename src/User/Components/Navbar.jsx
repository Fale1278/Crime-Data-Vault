import Officer2 from '../../assets/officer2.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaBell} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const policeProfile= location.pathname === '/policeProfile'
  const criminalProfile = location.pathname === '/criminalProfile'
  const visitorProfile = location.pathname === '/visitorProfile'
  
  

  return (
    <div className='Navbar'>
      <p className='bell'><FaBell /></p>
     {!policeProfile && !criminalProfile && !visitorProfile && <ul className='search'><AiOutlineSearch style={{fontSize: '22px'}}/><input type="text" placeholder='Search' /></ul>}
      <ul className='officer2'><span>Officer</span> <img src={Officer2} alt="" /></ul>
    </div>
  )
}

export default Navbar
