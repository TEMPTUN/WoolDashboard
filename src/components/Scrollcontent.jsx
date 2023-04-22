import React from 'react'
import { useEffect } from 'react';
import style from '../styles/scrollcontent.module.scss'
import axios from 'axios';
import obj from '../utils/connect';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';


const Scrollcontent = () => {
    const {register,handleSubmit} = useForm();
    const [profile,setprofile] = React.useState(false);
    const [study,setstudy] = React.useState(false);
    const [experince,setexperince] = React.useState(false);
    const [educations,seteducations] = React.useState(false);
    const [tscore,settscore] = React.useState(false);
    // const [addinfo,setaddinfo] = React.useState(false);
    // const [lor,setlor] = React.useState(false);
    const [edita,setedita] = React.useState(false);
    const [editb,seteditb] = React.useState(false);
    const [editc,seteditc] = React.useState(false);
    const [editd,seteditd] = React.useState(false);
    const [edite,setedite] = React.useState(false);
    const [deg,setdeg] = React.useState('');
    const [cou,setcou] = React.useState('');
    const [bran,setbran] = React.useState('');
    const [str,setstr] = React.useState('');
    const [bud,setbud] = React.useState('');
    const [userdata,setuserdata] = React.useState({
        name:'',
        email:'',
        number:'',
        location:'',
        dob:'',
        gender:'',
        martialstatus:'',
    });
    const [educationdata,seteducationdata] = React.useState([]);
    const [experincedata,setexperincedata] = React.useState([]);
    const [testscoredata,settestscoredata] = React.useState([]);
    // const [addinfodata,setaddinfodata] = React.useState({
    //     ename:'',
    //     eemail:'',
    //     enumber:'',
    //     eaddress:'',
    //     epincode:'',
    //     ecity:'',
    //     estate:'',
    //     ecountry:'',
    // });
    // const [lordata,setlordata] = React.useState({
    //     lname:'',
    //     lemail:'',
    //     lnumber:'',
    //     lrelation:'',
    //     ocontact:'',
    //     posatladdress:'',
    // });
    const [studydata,setstudydata] = React.useState({
        courselevel:'',
        countrychoice:'',
        studychoice:'',
        coursetype:'',
        courseobjective:'',
        budget:'',
        startdate:'',
    });


    const customstyles = {
        overlay: {
            zIndex: 1000,
            top: '15%',
            left: '15%',
            right: '15%',
            bottom: '15%',
            height:'80%',
            width:'70%',
            outline: 'none',
            border: '1px solid #ccc',
            borderRadius:'20px',
            backgroundColor: 'hsl(0, 0%, 99%)',
            boxShadow: '0 3px 10px #000',
        },
        content: {
            margin:0,
            background: '#fffEFC',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            border: 'none',
        }
    }
    

    useEffect(()=>{
        const data =async()=> {
            const resp = await axios.get(`${obj.apicall}/api/getuser?id=${localStorage.getItem('userid')}`)
            setuserdata(p=>({
                ...p,
                name:`${resp.data[0].name}`,
                email:`${resp.data[0].email}`,
                number:`${resp.data[0].mobilenum}`,
                location:'India',
                dob:`${resp.data[0].dob}`,
                gender:`${resp.data[0].gender}`,
                martialstatus:`${resp.data[0].martialStatus}`,
            }))
            setexperincedata(resp.data[0].educationId)

            const resp1 = await axios.get(`${obj.apicall}/api/getinfo?id=${localStorage.getItem('userid')}`)

            setstudydata(p=>({
                ...p,
                courselevel:`${resp1.data.courselevel}`,
                countrychoice:`${resp1.data.countrychoice}`,
                studychoice:`${resp1.data.studychoice}`,
                coursetype:`${resp1.data.coursetype}`,
                budget:`${resp1.data.budget}`,
            }))
            settestscoredata(resp1.data.testscoreId)
            seteducationdata(resp1.data.additionalId)

        }
        data()
    },[])
    const selectgender = (e) => {
        if(e==='male'){
            setedita(!edita)
            seteditb(false)
            seteditc(false)
        }else if(e==='female'){
            seteditb(!editb)
            setedita(false)
            seteditc(false)
        }else{
            seteditc(!editc)
            setedita(false)
            seteditb(false)
        }
        setuserdata(p=>({
            ...p,
            gender:e,
        }))
    }

    const marry = (e) => {
        if(e==='married'){
            seteditd(!editd)
            setedite(false)
            e='Married'
        }else{
            setedite(!edite)
            seteditd(false)
            e='Unmarried'
        }
        setuserdata(p=>({
            ...p,
            martialstatus:e,
        }))
    }

    const getdegree = (e) => {
        if(e==='bachelor'){
            setdeg('Bachelor')
            e='Bachelor'
        }else if(e==='master'){
            setdeg('Master')
            e='Master'
        }else{
            setdeg('Phd')
            e='Phd'
        }
        setstudydata({
            ...studydata,
            courselevel:e,
        })
    }
    const getcountry = (e) => {
        if(e==='usa'){
            setcou('United States')
            e='United States'
        }else if(e==='uk'){
            setcou('United Kingdom')
            e='United Kingdom'
        }else if(e==='australia'){
            setcou('Australia')
            e='Australia'
        }else if(e==='canada'){
            setcou('Canada')
            e='Canada'
        }else if(e==='newzealand'){
            setcou('New Zealand')
            e='New Zealand'
        }

        setstudydata({
            ...studydata,
            countrychoice:e,
        })
    }
    const getbranch = (e) => {
        if(e==='arts'){
            setbran('Arts')
            e='Arts'
        }else if(e==='bussiness'){
            setbran('Bussiness')
            e='Bussiness'
        }else if(e==='cse'){
            setbran('Computer Science')
            e='Computer Science'
        }else if(e==='engineering'){
            setbran('Engineering')
            e='Engineering'
        }else if(e==='health'){
            setbran('Health')
            e='Health'
        }
        setstudydata({
            ...studydata,
            studychoice:e,
        })
    }
    const getstream = (e) => {
        if(e==='AI'){
            setstr('Artficial Intelligence')
            e='Artficial Intelligence'
        }else if(e==='ML'){
            setstr('Machine Learning')
            e='Machine Learning'
        }else if(e==='CV'){
            setstr('Computer Vision')
            e='Computer Vision'
        }else if(e==='SE'){
            setstr('Software Engineering')
            e='Software Engineering'
        }
        setstudydata({
            ...studydata,
            coursetype:e,
        })
    }
    const getbudget = (e) => {
        if(e==='10'){
            setbud('10')
        }else if(e==='20'){
            setbud('20')
        }else if(e==='30'){
            setbud('30')
        }else if(e==='40'){
            setbud('40')
        }
        setstudydata({
            ...studydata,
            budget:e,
        })
    }
    

    const onSubmit = async(e) => {
        setprofile(!profile);
        const d={
            id:localStorage.getItem('userid'),
            name:e.name,
            email:e.email,
            number:e.number,
            location:'India',
            dob:e.dob.replace("T00:00:00.000Z",""),
            gender:userdata.gender,
            martialstatus:userdata.martialstatus,
        }
        await axios.put(`${obj.apicall}/api/proupdate`,d)
        window.location.reload();  
    }

    const onStudy = async() => {
        setstudy(!study);
        const d={
            id:localStorage.getItem('userid'),
            courselevel:studydata.courselevel,
            countrychoice:studydata.countrychoice,
            studychoice:studydata.studychoice,
            coursetype:studydata.coursetype,
            budget:studydata.budget,
        }
        await axios.put(`${obj.apicall}/api/getstudy`,d)
        setstudydata({
            courselevel:'',
            countrychoice:'',
            studychoice:'',
            coursetype:'',
            courseobjective:'',
            budget:'',
            startdate:'',
        })
        window.location.reload();
    }

    const onExper = async(e) => {
        setexperince(!experince);
        const d={
            id:localStorage.getItem('userid'),
            education:e
        }
        await axios.put(`${obj.apicall}/api/eduupdate`,d)
        window.location.reload();
    }

    const onTest = async(e) => {
        settscore(!tscore);
        const d={
            id:localStorage.getItem('userid'),
            test:e
        }
        await axios.put(`${obj.apicall}/api/settest`,d)
        window.location.reload();
    }

    const onEdu = async(e) => {
        seteducations(!educations)
        console.log(e);
        const d={
            id:localStorage.getItem('userid'),
            educate:e
        }
        await axios.put(`${obj.apicall}/api/seteme`,d)
        window.location.reload();
    }

  return (
    <div className={style.scrollcontent} style={profile?{opacity:'0.5'}: {opacity:1}}>
        <h3>20 Pending Actions</h3>

        {profile && 
            <Modal
                isOpen={profile}
                onRequestClose={()=>setprofile(false)}
                style={customstyles}
                opacity={0.5}
            >
                <div>
                    <h2>Edit Profile</h2>
                    <div className={style.modalcontent}>
                        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
                            <input placeholder='Name' value={userdata.name} {...register("name")} name="name"/>
                            <input placeholder='Email' name='email' value={userdata.email} {...register("email")}/>
                            {userdata.number!==("undefined" || '' || undefined)?<input placeholder='Whatsapp Number' name='number' {...register("number")}/>:<input name='number' placeholder='Whatsapp Number' {...register("number")}/>}
                            {userdata.number!==("undefined" || '' || undefined)?<input placeholder='Whatsapp Number' name='number'  {...register("number")}/>:<input name='number' placeholder='Whatsapp Number' {...register("number")}/>}
                            <div>
                                <span onClick={()=>selectgender('male')} style={edita?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Male</span>
                                <span onClick={()=>selectgender('female')} style={editb?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Female</span>
                                <span onClick={()=>selectgender('other')} style={editc?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Other</span>
                            </div>
                            <input placeholder='D.O.B' name='dob' {...register("dob")} type='date' />
                            <input placeholder='City' name='city' {...register("city")}/>
                            <input placeholder='State' name='state' {...register("state")}/>
                            <div>
                                <span onClick={()=>marry('married')} style={editd?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Married</span>
                                <span onClick={()=>marry('unmarried')} style={edite?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Unmarried</span>
                            </div>
                            <div className={style.buttons}>
                                <button className={style.modalbutton} onClick={()=>setprofile((p)=>!p)}>close</button>
                                <button type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>}

        <div className={style.innerbat}>
            <div className={style.inner1}>
                <img src='https://source.unsplash.com/random/1920x1080/?wallpaper,landscape' alt='kit'/>
                <div className={style.inner2}>
                    <span className={style.username}>{userdata?.name}</span>
                    <span style={{fontWeight:600,fontSize:'20px',paddingTop:'5px',color:'gray'}}>Profile status <span style={{color:'black'}}>33%</span></span>
                    <div className={style.progress}>
                        <div className={style.progressvalue}></div>
                    </div>
                    <div className={style.inner3}>
                        <span>{userdata?.email}</span>
                        <span>{userdata?.number===("undefined" || '' || undefined)?<span>Add your Mobile no.</span>:userdata?.number}</span>
                        <span>{userdata?.number===("undefined" || '' || undefined)?<span>Add your Mobile no.</span>:userdata?.number}</span>
                    </div>
                    <div className={style.inner3}>
                        <span>{userdata?.location}</span>
                        <span>{userdata?.dob===("undefined" || '' || undefined)?<span>Add your D.O.B</span>:userdata.dob.replace("T00:00:00.000Z","")}</span>
                        <span>{userdata?.gender===("undefined" || '' || undefined)?<span>Add your Gender</span>:userdata.gender}</span>
                        <span>{userdata?.martialstatus===("undefined" || '' || undefined)?<span>Unmarried</span>:userdata.martialstatus}</span>
                    </div>
                </div>
            </div>
            <span className={style.spbutton} onClick={()=>setprofile((p)=>!p)}><img src='/plus.svg' alt='plus'/></span>
        </div>

        {study && 
            <Modal 
                isOpen={study}
                onRequestClose={()=>setstudy(false)}
                style={customstyles}
                opacity={0.5}
            >
                <div className={style.innerbat1}>
                    <h2>Edit Study Preference</h2>
                    <div className={style.gri}>
                        <form onSubmit={handleSubmit(onStudy)} encType="multipart/form-data" >
                            <div>
                                <h3>Course Level</h3>
                                <div className={style.grids}>
                                    <span onClick={()=>getdegree('bachelor')} style={deg==='Bachelor'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Bachelors</span>
                                    <span onClick={()=>getdegree('master')} style={deg==='Master'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Masters</span>
                                    <span onClick={()=>getdegree('phd')} style={deg==='Phd'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Phd</span>
                                </div>
                            </div>
                            <div>
                                <h3>Country Preferences</h3>
                                <div className={style.grids}>
                                    <span onClick={()=>getcountry('usa')} style={cou==='United States'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>United States</span>
                                    <span onClick={()=>getcountry('uk')} style={cou==='United Kingdom'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>United Kingdom</span>
                                    <span onClick={()=>getcountry('newzealand')} style={cou==='New Zealand'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>New Zealand</span>
                                    <span onClick={()=>getcountry('australia')} style={cou==='Australia'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Australia</span>
                                    <span onClick={()=>getcountry('canada')} style={cou==='Canada'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Canada</span>
                                </div>
                            </div>
                            <div>
                                <h3>Preffered Courses</h3>
                                <div className={style.grids}>
                                    <span onClick={()=>getbranch('cse')} style={bran==='Computer Science'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Computer Science</span>
                                    <span onClick={()=>getbranch('bussiness')} style={bran==='Business'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Business</span>
                                    <span onClick={()=>getbranch('engineering')} style={bran==='Engineering'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Engineering</span>
                                    <span onClick={()=>getbranch('health')} style={bran==='Health'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Health</span>
                                    <span onClick={()=>getbranch('arts')} style={bran==='Arts'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Arts</span>
                                </div>
                            </div>
                            <div>
                                <h3>Specilization</h3>
                                <div className={style.grids}>
                                    <span onClick={()=>getstream('AI')} style={str==='Artificail Intelligence'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Artificial Intelligence</span>
                                    <span onClick={()=>getstream('ML')} style={str==='Machine Learning'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Machine Learning</span>
                                    <span onClick={()=>getstream('SE')} style={str==='Softwrare Engineering'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Software Engineering</span>
                                    <span onClick={()=>getstream('CV')} style={str==='Computer Vision'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>Computer Vision</span>
                                </div>
                            </div>
                            <div>
                                <h3>Budget</h3>
                                <div className={style.grids}>
                                    <span onClick={()=>getbudget('10')} style={bud==='10'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>₹10 Lakh</span>
                                    <span onClick={()=>getbudget('20')} style={bud==='20'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>₹20 Lakh</span>
                                    <span onClick={()=>getbudget('30')} style={bud==='30'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>₹30 Lakh</span>
                                    <span onClick={()=>getbudget('40')} style={bud==='40'?{backgroundColor:'hsl(37, 92%, 50%)'}:{}}>₹40 Lakh</span>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                <button className={style.modalbutton} onClick={()=>setstudy((p)=>!p)}>close</button>
                                <button type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        }

        <div className={style.innerbat1}>
            <h2>Your study preference</h2>
            <hr/>
            <div className={style.gri}>
                <div>
                    <span><img src='/1.svg' alt='1'/></span>
                    <span>Course level</span>
                    {studydata?.courselevel.length===0?<p>add your course level</p>:<p>{studydata.courselevel}</p>}
                </div>
                <div>
                    <span><img src='/2.svg' alt='2'/></span>
                    <span>Country Preferences</span>
                    {studydata.countrychoice.length===0?<p>add country choice</p>:<p>{studydata.countrychoice}</p>} 
                </div>
                <div>
                    <span><img src='/3.svg' alt='3'/></span>
                    <span>Preffered Courses</span>
                    {studydata.studychoice.length===0?<p>add your branch</p>:<p>{studydata.studychoice}</p>}
                </div>
                <div>
                    <span><img src='/4.svg' alt='4'/></span>
                    <span>Specilization</span>
                    {studydata.coursetype.length===0?<p>add your stream</p>:<p>{studydata.coursetype}</p>}     
                </div>
                <div>
                    <span><img src='/5.svg' alt='5'/></span>
                    <span>Budget</span>
                    {studydata.budget.length===0?<p>add your budget</p>:<p>{studydata?.budget} Lakh</p>}
                </div>
            </div>
            <span className={style.spbutton} onClick={()=>setstudy((p)=>!p)}><img src='/plus.svg' alt='plus'/></span>
        </div>

        {experince && 
            <Modal
                isOpen={experince}
                onRequestClose={()=>setexperince((p)=>!p)}
                style={customstyles}
                opacity={0.5}
            >
                <div className={style.innerbat1}>
                    <h2>Experience</h2>
                    <hr/>
                    <div>
                        <form className={style.forms} onSubmit={handleSubmit(onExper)}>
                            <div>
                                <input type='text' placeholder='Job Role' name='jobrole' {...register('jobrole')}/>
                                <input type='text' placeholder='Company Name' name='companyname' {...register('companyname')}/>
                                <input type='text' placeholder='job description' name='jobdesc' {...register('jobdesc')}/>
                                <input type='text' placeholder='start date' name='startdate' {...register('startdate')}/>
                                <input type='text' placeholder='end date' name='enddate' {...register('enddate')}/>
                            </div>
                            <div className={style.buttons}>
                                <button className={style.modalbutton} onClick={()=>setexperince((p)=>!p)}>close</button>
                                <button type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        }


        <div className={style.innerbat1}>
            <h2>Experience</h2>
            <hr/>
            <div>
                {experincedata.length!==0 && experincedata?.map((item)=>(
                    <div className={style.outjob}>
                        <span><img src='/flame.svg' alt='10'/></span>
                        <div className={style.jobs}>
                            <span className={style.ja}>{item.jobrole}</span>
                            <span className={style.jb}>{item.companyname}</span>
                            <span className={style.jc}>{item.startdate}-{item.enddate}</span>
                            <span className={style.jd}>{item.jobdesc}</span>
                        </div>
                    </div>))
                }
            </div>
            <button className={style.lengthbutton} onClick={()=>setexperince((p)=>!p)}>Add Experience</button>  
            
        </div>

        {educations &&
            <Modal
                isOpen={educations}
                onRequestClose={()=>seteducations((p)=>!p)}
                style={customstyles}    
                opacity={0.5}
            >
                <div className={style.innerbat1}>
                    <h2>Add Education</h2>
                    <div className={style.buttons}>
                        <form className={style.forms} onSubmit={handleSubmit(onEdu)}>
                            <select name='opt' {...register('opt')}>
                                <option value='10th'>10th</option>
                                <option value='12th'>12th</option>
                                <option value='graduation'>Graduation</option>
                                <option value='postgraduation'>Post Graduation</option>
                            </select>
                            <input type='text' placeholder='City of study' name='cityname' {...register('cityname')}/>
                            <input type='text' placeholder='State of study' name='statename' {...register('statename')}/>
                            <input type='text' placeholder='Country of study' name='countryname' {...register('countryname')}/>
                            <input type='text' placeholder='college/university' name='institutename' {...register('institutename')}/>
                            <input type='text' placeholder='Course Name' name='coursename' {...register('coursename')}/>
                            <input type='text' placeholder='field of study' name='coursetype' {...register('coursetype')}/>
                            <input type='text' placeholder='grading System' name='grade' {...register('grade')}/>
                            <input type='text' placeholder='Achieved marks' name='mark' {...register('mark')}/>
                            <input type='text' placeholder='Language of course' name='lang' {...register('lang')}/>
                            <input type='text' placeholder='start date' name='startdate' {...register('startdate')}/>
                            <input type='text' placeholder='end date' name='enddate' {...register('enddate')}/>
                            <div className={style.buttons}>
                                <button className={style.modalbutton} onClick={()=>seteducations((p)=>!p)}>close</button>
                                <button type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>}

        <div className={style.innerbat1}>
            <h2>Education</h2>
            <hr/>
            {educationdata.length!==0 && educationdata?.map((item)=>(
                <div className={style.outjob}>
                    <span><img src='/t.svg' alt='15'/></span>
                    <div className={style.jobs}>
                        <span>{item.opt}</span>
                        <span>pass {item.mark}%</span>
                        <span>{item.startdate}-{item.enddate}</span>
                    </div>
                </div>))
            }
            <button className={style.lengthbutton} onClick={()=>seteducations((p)=>!p)}>Add Education</button>
            
        </div>

        {tscore && 
            <Modal
                isOpen={tscore}
                onRequestClose={()=>settscore((p)=>!p)}
                style={customstyles}
                opacity={0.5}
            >
                <div className={style.innerbat1}>
                    <h2>Test Scores</h2>
                    <form onSubmit={handleSubmit(onTest)} className={style.tests}>
                        <input type='text' placeholder='Test Name' name='testname' {...register('testname')}/>
                        <input type='text' placeholder='Test Score' name='testscore' {...register('testscore')}/>
                        <input type='text' placeholder='Test Date' name='testdate' {...register('testdate')}/>
                        <div className={style.buttons}>
                            <button className={style.modalbutton} onClick={()=>settscore((p)=>!p)}>close</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        }

        <div className={style.innerbat1}>
            <h2>Test Scores</h2>
            <hr/>
            {testscoredata.length!==0 && testscoredata?.map((item)=>(
                <div >
                    <div className={style.test}>
                        <span>{item.testname}</span>
                        {/* <span>{item.testscore}</span> */}
                        <span>{item.testdate}</span>
                    </div>
                </div>))
            }
            <button className={style.lengthbutton} onClick={()=>settscore((p)=>!p)}>Add Score</button>
        </div>

        {/* <div className={style.innerbat1}>
            <h2>Additional Information</h2>
            <hr/>
            <button>add info</button>
            <span className={style.spbutton} onClick={()=>setaddinfo((p)=>!p)}>Save</span>
        </div>

        <div className={style.innerbat1}>
            <h2>Lor details</h2>
            <hr/>
            <button>add info</button>
            <span className={style.spbutton} onClick={()=>setlor((p)=>!p)}>Save</span>
        </div> */}
       
    </div>
  )
}

export default Scrollcontent