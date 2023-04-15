import React from 'react'
import style from '../styles/sidenavbar.module.scss'

const Sidenavbar = () => {
  const logout=()=>{
    localStorage.removeItem('userid')
    window.location.href='/'
  }
  return (
    <div className={style.sidenavbar}>
          <span><img src='/dip.svg' alt='image1'/></span>
          <span><img src='/book.svg' alt='image2'/></span>
          <span><img src='/bulb.svg' alt='image3'/></span>
          <span><img src='/ebook.svg' alt='image4'/></span>
          <span><img src='/int.svg' alt='image5'/></span>
          <span className={style.act} onClick={()=>logout()}><img src="/logout.svg" alt='i'/></span>
    </div>
  )
}

export default Sidenavbar