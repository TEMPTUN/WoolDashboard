import React from 'react'
import { useEffect } from 'react';
import style from '../styles/scrollcontent.module.scss'
import HeatMap from '@uiw/react-heat-map';
import axios from 'axios';
import obj from '../utils/connect';

const value = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/01/12', count: 20 },
    { date: '2016/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
    { date: '2016/04/11', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/04', count: 11 },
  ];


const Scrollcontent = () => {
    const [edit,setedit] = React.useState(false);
    const [name,setname] = React.useState('');
    const [email,setemail] = React.useState('');
    const [bio,setBio] = React.useState('');
    const [pass,setPass] = React.useState('');
    const [Linkedin,setLinkedin] = React.useState('');
    const [Github,setGithub] = React.useState('');
    const [Facebook,setFacebook] = React.useState('');
    const [Website,setWebsite] = React.useState('');
    const [intvalue,setintvalue] = React.useState('Web Development');
    const [changevalue,setchangevalue] = React.useState('graduate');
    const [classvalue,setclassvalue] = React.useState('10th');
    const [bigdata,setbigdata] = React.useState({});
    const handleChange = (e) => {
        setchangevalue(e.target.value);
    }
    const handleclass = (e) => {
        setclassvalue(e.target.value);
    }
    const handleintrest = (e) => {
        setintvalue(e.target.value);
    }
    

    useEffect(()=>{
        const data =async()=> {
            const resp = await axios.get(`${obj.apicall}/api/getuser?id=${localStorage.getItem('userid')}`)
            setbigdata(resp.data[0])
            setname(resp.data[0].name)
            setemail(resp.data[0].email)
            setPass(resp.data[0].password)
        }
        data()
    },[])
    const savebio = async() => {
        setedit(!edit);
        const d={
            id:localStorage.getItem('userid'),
            bio:bio
        }
        await axios.put(`${obj.apicall}/api/proupdate`,d)
    }

    const savepassword = async() => {
        setedit(!edit);
        const d={
            id:localStorage.getItem('userid'),
            password:pass,
            name:name,
            email:email
        }
        await axios.put(`${obj.apicall}/api/proupdate`,d)
    }
    const savelink = async() => {
        setedit(!edit);
        const d={
            id:localStorage.getItem('userid'),
            links:[{Linkedin:Linkedin,Github:Github,Facebook:Facebook,Website:Website}]
        }
        await axios.put(`${obj.apicall}/api/eduupdate`,d)
    }

    const savedetails = async() => {
        setedit(!edit);
        const d={
            id:localStorage.getItem('userid'),
            education:[{college:changevalue,schooling:classvalue}]
        }
        await axios.put(`${obj.apicall}/api/eduupdate`,d)
    }

    const saveintrest = async() => {
        setedit(!edit);
        const d={
            id:localStorage.getItem('userid'),
            intrests:[intvalue]
        }
        await axios.put(`${obj.apicall}/api/eduupdate`,d)
    }
  return (
    <div className={style.scrollcontent}>
        <div className={style.innerbat}>
            <h3>About me</h3>
            {!edit && <input className={style.about} value={bigdata?.bio===undefined?bio:bigdata.bio} placeholder='Tell us something about you!!!' />}
            {edit && <input className={style.about} value={bio} placeholder='Tell us something about you!!!' onChange={(e)=>setBio(e.target.value)} />}
            {!edit && <button onClick={()=>setedit(!edit)}>Edit</button>}
            {edit && <button onClick={()=>savebio()}>Save</button>}
        </div>
        <div className={style.map}>
            <h3>Map</h3>
            <HeatMap value={value} width={1200} rectSize={24} startDate={new Date('2016/01/01')} />
        </div>
        <div>
            <h3>On the web</h3>
            <p className={style.gridlayout}>  
                {!edit && <span class="grid-item">Linkedin <input value={
                    (!Array.isArray(bigdata.linkId) || !bigdata.linkId.length)?Linkedin:bigdata.linkId[0].Linkedin
                } /></span>} 
                {edit && <span class="grid-item">Linkedin <input value={Linkedin} onChange={(e)=>setLinkedin(e.target.value)}/></span>}
                {!edit && <span class="grid-item">Github <input value={
                    (!Array.isArray(bigdata.linkId) || !bigdata.linkId.length)?Github:bigdata.linkId[0].Github
                } /></span>}
                {edit && <span class="grid-item">Github <input value={Github} onChange={(e)=>setGithub(e.target.value)}/></span>}
                {!edit && <span class="grid-item">Facebook <input value={
                    (!Array.isArray(bigdata.linkId) || !bigdata.linkId.length)?Facebook:bigdata.linkId[0].Facebook
                } /></span>}
                {edit && <span class="grid-item">Facebook <input value={Facebook} onChange={(e)=>setFacebook(e.target.value)}/></span>}
                {!edit && <span class="grid-item">Website <input value={
                    (!Array.isArray(bigdata.linkId) || !bigdata.linkId.length)?Website:bigdata.linkId[0].Website
                } /></span>}
                {edit && <span class="grid-item">Website <input value={Website} onChange={(e)=>setWebsite(e.target.value)}/></span>}
            </p>
            {!edit && <button onClick={()=>setedit(!edit)}>Edit</button>}
            {edit && <button onClick={()=>savelink()}>Save</button>}
        </div>
        <div>
            <h3>personal info</h3>
            {!edit && <p className={style.lay}>
                <ul>
                <span>College details</span>
                <select value={
                    (!Array.isArray(bigdata.educationId) || !bigdata.educationId.length)?changevalue:bigdata.educationId[0].college
                }>
                    <option>graduate</option>
                    <option>post graduate</option>
                </select>
                </ul>
                <ul>
                <span>Educational details</span>
                <select value={
                    (!Array.isArray(bigdata.educationId) || !bigdata.educationId.length)?classvalue:bigdata.educationId[0].schooling
                }>
                    <option value='10th'>10th</option>
                    <option value='12th'>12th</option>
                </select>
                </ul>
            </p>}
            {edit && 

            <p className={style.lay}>
                <ul>
                <span>College details</span>
                <select value={bigdata?.educationId[0]?.college===undefined?changevalue:bigdata.educationId[0].college} onChange={(e)=>handleChange(e)}>
                    <option>graduate</option>
                    <option>post graduate</option>
                </select>
                </ul>
                <ul>
                <span>Educational details</span>
                <select value={classvalue} onChange={(e)=>handleclass(e)}>
                    <option value='10th'>10th</option>
                    <option value='12th'>12th</option>
                </select>
                </ul>
            </p>
}
            {!edit && <button onClick={()=>setedit(!edit)}>Edit</button>}
            {edit && <button onClick={()=>savedetails()}>Save</button>}
        </div>
        <div className={style.passdiv}>
            <h3>password</h3>
            {!edit && <input type='text' className={style.about} value={bigdata?.name===undefined?name:bigdata.name}  />}
            {edit && <input type='text' className={style.about} value={name} placeholder='set name' onChange={(e)=>setname(e.target.value)} />}
            {!edit && <input type='text' className={style.about} value={bigdata?.email===undefined?email:bigdata.email}  />}
            {edit && <input type='text' className={style.about} value={email} placeholder='set email' onChange={(e)=>setemail(e.target.value)} />}
            {!edit && <input type='password' className={style.about} value={
                bigdata?.password===undefined?pass:bigdata.password
            }  />}
            {edit && <input type='password' className={style.about} value={pass} placeholder='set password' onChange={(e)=>setPass(e.target.value)} />}
            {!edit && <button onClick={()=>setedit(!edit)}>Edit</button>}
            {edit && <button onClick={()=>savepassword()}>Save</button>}
        </div>
        <div className={style.last}>
            <h3>Intrests</h3>
            {!edit && <select value={
                (!Array.isArray(bigdata.intrestsId) || !bigdata.intrestsId.length)?intvalue:bigdata.intrestsId[0]
            }>
                <option value='Web Development'>Web Development</option>
                <option value='app Development'>app Development</option>
                <option value='Machine Learning'>Machine Learning</option>
                <option value='Artificial Intelligence'>Artificial Intelligence</option>
            </select>}
            {edit && <select value={
                (!Array.isArray(bigdata.intrestsId) || !bigdata.intrestsId.length)?intvalue:bigdata.intrestsId[0]
            } onChange={(e)=>handleintrest(e)}>
                <option value='Web Development'>Web Development</option>
                <option value='app Development'>app Development</option>
                <option value='Machine Learning'>Machine Learning</option>
                <option value='Artificial Intelligence'>Artificial Intelligence</option>
            </select>}
            {!edit && <button onClick={()=>setedit(!edit)}>Edit</button>}
            {edit && <button onClick={()=>saveintrest()}>Save</button>}
        </div>
       
    </div>
  )
}

export default Scrollcontent