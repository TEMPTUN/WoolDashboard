import React, { useEffect } from 'react'
import style from '../styles/header.module.scss'
import axios from 'axios'
import obj from '../utils/connect'

const Header = () => {
  const [user, setUser] = React.useState()
  useEffect(()=>{
    const getuser=async()=>{
      const Id = localStorage.getItem('userid')
      const res = await axios.get(`${obj.apicall}/api/getuser?id=${Id}`)
      setUser(res.data[0])
    }
    getuser()
  },[])
  const navigate = () => {
    window.location.href = '/followers'
  }
  return (
    <div className={style.box}>
        <div className={style.inbox}>
            <div><span><img src='https://source.unsplash.com/random/1920x1080/?wallpaper,landscape' alt='ki'/></span></div>
            <div>
                <span>Hello ,</span>
                <span>{user?.name}</span>
                <span>{user?.email}</span>
            </div>
        </div>
        <div>
            <span onClick={()=>navigate()}>Followers</span>
        </div>
    </div>
  )
}

export default Header