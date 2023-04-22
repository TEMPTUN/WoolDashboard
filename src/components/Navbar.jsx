import React,{useEffect} from 'react'
import style from '../styles/navbar.module.scss'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('userid')){
      navigate('/')
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className={style.nav}>
        <div className={style.leftnav}>
          <div><h2>Admit Kard</h2></div>
        </div>
        <div className={style.rightnav}>
          <img src='/bell.svg' alt='watch' />
          <img src='https://source.unsplash.com/random/1920x1080/?wallpaper,landscape'  alt='user' />
          <select>
            <option>{localStorage.getItem('username')}</option>
            <option onClick={()=>localStorage.clear('userid')}>logout</option>
          </select>
        </div>
    </div>
  )
}

export default Navbar