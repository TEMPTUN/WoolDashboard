import React from 'react'
import Searchbar from './Searchbar'
import style from '../styles/navbar.module.scss'

const Navbar = () => {
  return (
    <div className={style.nav}>
        <div className={style.leftnav}>
          <div><img src='/box.svg'/></div>
          <div><h2>cipher school</h2></div>
          <div>
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
        <div className={style.rightnav}>
          <Searchbar/>
          <img src='/profile.svg' alt='image'/>
          <img src='/switch.svg' />
          <img src='/ribbon.svg' />
        </div>
    </div>
  )
}

export default Navbar