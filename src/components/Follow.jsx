import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import obj from '../utils/connect'

const Follow = () => {
  const [follow,setfollow] = React.useState([])

  useEffect(()=>{
    const data = async() => {
      const resp = await axios.get(`${obj.apicall}/api/getuser?id=${localStorage.getItem('userid')}`)
      setfollow(resp.data[0].friendId)
    }
    data()
  },[follow])
  return (
    <div>
        <h1>Followers ids</h1>
        {follow.map((item)=>{
            return <div>UserId :{item}</div>
        })
        }
    </div>
  )
}

export default Follow