import React from 'react'
import style from '../styles/home.module.scss'
import axios from 'axios'
import obj from '../utils/connect'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/fireconnect'
import { useEffect } from 'react'


const Home = () => {
  const [isuser, setIsUser] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [check, setCheck] = React.useState(false);
  const navigate = useNavigate();
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
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(userCredential.user);
      }).catch((error) => {
        console.log(error.message);
      });
      localStorage.setItem('userid', res.data.id)
      localStorage.setItem('username', name)
      setEmail('')
      setPassword('')
      setName('')
    }).catch(err => {
      setCheck(true)
      setEmail('')
      setPassword('')
      setName('')
    })
    if(localStorage.getItem('userid')){
      await axios.get(`${obj.apicall}/api/setinfo?id=${localStorage.getItem('userid')}`)
      navigate('/dashboard')
   }
  }
  const login = async(e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    signInWithEmailAndPassword(auth, email, password).then(async(userCredential) => {
      await axios.get(`${obj.apicall}/api/login?email=${data.email}&password=${data.password}`, data).then(res => {
      if(!localStorage.getItem('userid')){
        localStorage.setItem('userid', res.data.id)
        localStorage.setItem('username', name)
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
    }).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(()=>{
    if(localStorage.getItem('userid')){
      navigate('/dashboard')
    }
    // eslint-disable-next-line
  },[])
  
  return (
    <div className={style.maincontent}>
      {isuser && <div>
        <h1>Welcome Back!!!</h1>
        {check && <span>Invalid credientials</span>}
        {!check && <span>Don't have an account? Click here → <span style={{color:'blue'}} onClick={()=>handle()}>Sign up</span></span>}
        <form onSubmit={(e)=>login(e)}>
          <input placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder='Password' type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Log In</button>
        </form>
      </div>}
      {!isuser && <div>
        <h1>Hi, User</h1>
        {check && <span>Invalid credientials</span>}
        {!check && <span>Already have an account? Click here → <span style={{color:'blue'}} onClick={()=>handle()}>Log in</span></span>}
        <form onSubmit={(e)=>signmeup(e)}>
          <input placeholder='Username' required value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='email' placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder='Password' type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Sign Up</button>
        </form>
        </div>}
    </div>
  )
}

export default Home