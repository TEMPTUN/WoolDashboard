import React from 'react'
import style from '../styles/home.module.scss'
import axios from 'axios'
import obj from '../utils/connect'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [isuser, setIsUser] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const navigate = useNavigate();
  if(localStorage.getItem('userid')){
    navigate('/dashboard')
  }
  const handle = () => {
    setIsUser(!isuser);
    setEmail('');
    setPassword('');
    setName('');
  }
  const signmeup = async(e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password
    }
    await axios.post(`${obj.apicall}/api/signup`, data).then(res => {
      setEmail('')
      setPassword('')
      setName('')
      if(!localStorage.getItem('userid')){
        localStorage.setItem('userid', res.data.id)
        navigate('/dashboard')
      }else{
        navigate('/dashboard')
      }
    }).catch(err => {
      setCheck(true)
      setEmail('')
      setPassword('')
      setName('')
    }
    )
  }
  const login = async(e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    await axios.get(`${obj.apicall}/api/login?email=${data.email}&password=${data.password}`, data).then(res => {
      if(!localStorage.getItem('userid')){
        localStorage.setItem('userid', res.data.id)
        navigate('/dashboard')
      }else{
        navigate('/dashboard')
      }
      setEmail('')
      setPassword('')
    }).catch(err => {
      setCheck(true)
      setEmail('')
      setPassword('')
      setName('')
    }
    )
  }
  
  return (
    <div className={style.maincontent}>
      {isuser && <div>
        <h1>Welcome Back!!!</h1>
        {check && <span>Invalid credientials</span>}
        {!check && <span>Don't have an account? Click here → <span onClick={()=>handle()}>Hit</span></span>}
        <form onSubmit={(e)=>login(e)}>
          <input placeholder='enter email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Log In</button>
        </form>
      </div>}
      {!isuser && <div>
        <h1>Hi, User</h1>
        {check && <span>Invalid credientials</span>}
        {!check && <span>Already have an account? Click here → <span onClick={()=>handle()}>Hit</span></span>}
        <form onSubmit={(e)=>signmeup(e)}>
          <input placeholder='enter fullname' required value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='email' placeholder='enter email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder='enter password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Sign Up</button>
        </form>
        </div>}
    </div>
  )
}

export default Home