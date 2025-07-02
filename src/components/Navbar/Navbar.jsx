import React, { useContext } from 'react'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/2.png';
import { UserContext } from './../../Context/UserContext';

export default function Navbar() {
  let { userLogin } = useContext(UserContext)

  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 right-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo + Brand */}
        <NavLink to="/" className={({ isActive }) => `flex justify-items-start space-x-3 ${isActive ? "underline-offset-0" : ""}`}>
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <span className={`text-2xl text-white ${styles.italianFont}`}>VOITURE</span>
        </NavLink>

        {/* Navigation NavLinks */}
        {userLogin != null ? <>
          <ul className="flex items-center gap-6 text-sm font-medium ">

            <li><NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
            </li>

            <li><NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>About</NavLink>
            </li>

            <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Contact</NavLink>
            </li>

            <li><NavLink to="/category" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Category</NavLink>
            </li>
          </ul>

          {userLogin != null ? <div className='flex flex-row gap-4'>

            <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} text-lg` : `${styles.link} text-lg`}><FontAwesomeIcon icon={faShoppingCart} /></NavLink>

            <NavLink to="/wishlest" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} text-lg` : `${styles.link} text-lg`}><FontAwesomeIcon icon={faHeart} /></NavLink>

          </div> : <div className='flex flex-row gap-4 text-sm ml-80'>

            <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} text-lg` : `${styles.link} text-lg`}><FontAwesomeIcon icon={faShoppingCart} /></NavLink>

            <NavLink to="/wishlest" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} text-lg` : `${styles.link} text-lg`}><FontAwesomeIcon icon={faHeart} /></NavLink>

          </div>}
        </> : null}


        {userLogin != null ? <NavLink to="/signOut" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} ` : `${styles.link} `}>SignOut</NavLink> : <div className='flex flex-row gap-4 ' >
          <NavLink to="/login" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} ` : `${styles.link} `}>Login</NavLink>


          <NavLink to="/register" className={({ isActive }) => isActive ? `${styles.link} ${styles.active} ` : `${styles.link} `}>Register</NavLink>


        </div>}



      </div>
    </nav>
  );
}
