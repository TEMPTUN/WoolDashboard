import React from 'react'
import style from '../styles/sidenavbar.module.scss'

const Sidenavbar = () => {

  return (
    <nav className={style.sidenav}>
    <ul className={style.mainbuttons}>
      <li>
        {/* <i className="fa fa-circle fa-2x"></i>
         */}
         <img src='/book.svg' alt='33'/>
        Dashboard
      </li>
      <li>
        <i className="fa fa-circle fa-2x"></i>
        <div>
          Profile
          <img src='/left.svg' alt='34'/>
        </div>
        <ul className={style.hidden}>
          <li>View Profile</li>
          <li>Documents</li>
          <li>Your tasks</li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        <div>
          Report
          <img src='/left.svg' alt='35'/>
        </div>
        <ul className={style.hidden}>
          <li>Overview</li>
          <li>Country</li>
          <li>Specilization</li>
          <li>University</li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        <div>
          Apply
          <img src='/left.svg' alt='36'/>
        </div>
         <ul className={style.hidden}>
          <li>Shortlisted</li>
          <li>Applications</li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        <div>
          Mentors
          <img src='/left.svg' alt='37'/>
        </div>
         <ul className={style.hidden}>
          <li>Search Mentors</li>
        </ul>
      </li>
      <li>
        <i class="fa fa-circle fa-2x"></i>
        <div>
          Whatsapp Chat
          <img src='/left.svg' alt='39'/>
        </div>
         <ul className={style.hidden}>
          <li>Mentors</li>
          <li>Expert</li>
        </ul>
      </li>
      <li>
        <i className="fa fa-circle fa-2x"></i>
        Refer & Earn
      </li>
      <li>
        <i className="fa fa-circle fa-2x"></i>
        Help
      </li>
    </ul>
</nav>
  )
}

export default Sidenavbar