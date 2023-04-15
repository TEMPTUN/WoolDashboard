import React from 'react'
import style from '../styles/searchbar.module.scss'

const Searchbar = () => {
  return (
    <div className={style.searchbar}>
        <input type="text" placeholder="Search"/>
        <img src='/heart.svg' alt="image"/>
    </div>
  )
}

export default Searchbar