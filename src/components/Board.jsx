import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidenavbar from './Sidenavbar'
import style from '../styles/board.module.scss'
import Header from './Header'
import Scrollcontent from './Scrollcontent'
import { useNavigate } from 'react-router-dom'

const Board = () => {
  const navigate = useNavigate();
  if(localStorage.getItem('userid') === null){
    navigate('/')
  }
  return (
    <>
      <div className={style.kit}>
        <Navbar/>
        <Sidenavbar/>
        <Header/>
      </div>
      <Scrollcontent/>
    </>
  )
}

export default Board