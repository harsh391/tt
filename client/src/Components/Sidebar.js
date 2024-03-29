import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import {FaTimes} from 'react-icons/fa'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'
import axios from 'axios'



const Sidebar = () => {
    const state = useContext(GlobalState)
  const [user,setUser] = useState({})
  const [isSidebar] = state.isSidebar
  const [option,setOption] = state.option
  const closeSidebar = state.closeSidebar
  const [token] = state.token
  const [isAdmin,setIsAdmin] = state.isAdmin
  const [teacherId,setTeacherId] = state.teacherId
  const [isLogged,setIsLogged] = state.isLogged

    useEffect(() => {
    if(token)
    {
        const getUser = async() => {
            try{
                const res = await axios.get('/user/info',
                {headers:{Authorization:token}}
                )
                setUser(res.data)
                
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getUser()
    }   
  },[token])

  useEffect(() => {
    if(teacherId)
    {
        const getUser = async() => {
            try{
                const res = await axios.get(`/teacher/${teacherId}`,
                {headers:{Authorization:token}}
                )
                setUser(res.data)
                
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getUser()
    }   
  },[teacherId])

//   useEffect(() => {
//     if(teacherId) {
//         setTeacherToken(teacherId)
//     }
//   },[teacherId])

  user.firstname === 'admin' ? setIsAdmin(true) : setIsAdmin(false)
//   option==='' ? isAdmin && setOption('Test Admin') : setOption('Test')

    const handleClick = (e) => {
        e.preventDefault()
        closeSidebar()
    }

    const handleSelect = (e) => {
        e.preventDefault()
        setOption(e.target.innerText)
        closeSidebar()
    }
    const handleLogout = async (e) => {
        e.preventDefault()
        setIsAdmin(false)
        setTeacherId(false)
        setIsLogged(false)

        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = '/'
    }

  return (
    <>
        <aside className='sidebar' style={isSidebar ? {transform: 'translateX(0)'} : {}}>
            <button className='close_btn' onClick={handleClick}><FaTimes/></button>
            <div className='profile_container'>
                <div className='profile_img_container'>
                    <CgProfile className='profile_img' />
                    <h3 className='profile_h3'>{`${user.firstname} ${user.lastname}`}</h3>
                </div>
                <div className='profile_info'>
                    <span className='profile_std'>Std : {user.std || 'null'}</span>
                </div>
            </div>
            <ul className='option_container'>
                {/* Admin controlles */}
                {isAdmin && 
                <>
                    <li className={option==='Register' || option==='' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/admin/register'>Register</Link>
                    </li>
                    <li className={option==='Teacher Register' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/admin/teacherRegister'>Teacher Register</Link>
                    </li>
                    <li className={option==='Fees' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/admin/fees'>Fees</Link>
                    </li>
                    {/* <li className={option==='Syllabus' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/admin/syllabus'>Syllabus</Link>
                    </li> */}]
                </>
                }
                {/* Admin controls */}

                {/* teacher controls */}
                {teacherId!=="" && <>
                    <li className={option==='Test' || option==='test' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/teacher/tests'>Test</Link>
                    </li>
                    <li className={option==='syllabus' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/teacher/syllabus'>Syllabus</Link>
                    </li>
                    <li className={option==='Attendance' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/teacher/attendance'>Attendance</Link>
                    </li>
                    {/* <li className={option==='Fees' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/user/fees'>Fees</Link>
                    </li> */}
                    
                </>

                }
                {/* teacher controls */}

                {/* User Controls */}
                {(!isAdmin && teacherId==='') && <>
                    <li className={option==='Test' || option==='' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/user/tests'>Test</Link>
                    </li>
                    <li className={option==='syllabus' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/user/syllabus'>Syllabus</Link>
                    </li>
                    {/* <li className={option==='Schedule' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        Schedule
                    </li> */}
                    {/* <li className={option==='Fees' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/user/fees'>Fees</Link>
                    </li> */}
                    <li className={option==='Payment' ? 'sidebar_option_selected' : 'sidebar_option'} onClick={handleSelect}>
                        <Link to='/user/payment'>Payment</Link>
                    </li>
                    
                </>

                }
                {/* User Controls */}
                <li className='sidebar_option' onClick={handleLogout}>
                    Logout
                </li>
            </ul>
            <ul className='links_container'>
                <li className='sidebar_link'>
                    <Link to='https://www.twitter.com'>
                        <BsTwitter /> 
                    </Link>
                </li>
                <li className='sidebar_link'>
                    <Link to='https://www.instagram.com'>
                        <BsInstagram /> 
                    </Link>
                </li>
                <li className='sidebar_link'>
                    <Link to='https://www.facebook.com'>
                        <BsFacebook /> 
                    </Link>
                </li>
                <li className='sidebar_link'>
                    <Link to='https://www.youtube.com'>
                        <BsYoutube /> 
                    </Link>
                </li>
                <li className='sidebar_link'>
                    <Link to='https://www.linkedin.com'>
                        <BsLinkedin /> 
                    </Link>
                </li>
            </ul>
        </aside>
        <div className="sidebar-setting"></div>
    </>
  )
}

export default Sidebar


// import React, { useContext, useEffect, useState } from 'react'
// import "./Sidebar.css"
// import {FaTimes} from 'react-icons/fa'
// import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs'
// import {CgProfile} from 'react-icons/cg'
// import { Link } from 'react-router-dom'
// import { GlobalState } from '../GlobalState'
// import axios from 'axios'

// const Sidebar = () => {
//   const state = useContext(GlobalState)
//   const [user,setUser] = useState({})
//   const [isSidebar] = state.isSidebar
//   const [option,setOption] = state.option
//   const closeSidebar = state.closeSidebar
//   const [token] = state.token

//   useEffect(() => {
//     if(token)
//     {
//         const getUser = async() => {
//             try{
//                 const res = await axios.get('/user/info',
//                 {headers:{Authorization:token}}
//                 )
//                 setUser(res.data)
//             } catch (err) {
//                 alert(err.response.data.msg)
//             }
//         }
//         getUser()
//     }   
//   },[token])
  
//   const handleClick = (e) => {
//     e.preventDefault()
//     closeSidebar()
//   }
//   const handleSelect = (e) => {
//     e.preventDefault()
//     setOption(e.target.innerText)
//     closeSidebar()
//   }
//   return (
//     <>
//     <aside className='sidebar' style={isSidebar ? {transform:'translateX(0)'}: {} }>
//         <div>
//             <button className="close-btn" onClick={handleClick}>
//                 <FaTimes />
//             </button>
//             {/* Avatar and name */}
//             <div className="sidebarInfo">
//                 <CgProfile className='profileIcon'/>
//                 <div>
//                     <p>{user.name}</p>
//                     <p>{user.medium} medium</p>
//                 </div>
//                 <div>
//                     <p>{user.board}</p>
//                     <p>{user.std}th grade</p>
//                 </div>
//             </div>
//             {/* links */}
//             <ul className="sidebar-links">
//                 <li>
//                     <button className='btn sidebar-btn' onClick={handleSelect}>Test
//                     </button>
//                 </li>
//                 <li>
//                     <button className='btn sidebar-btn' onClick={handleSelect}>Syllabus
//                     </button>
//                 </li>
//                 <li>
//                     <button className='btn sidebar-btn' onClick={handleSelect}>Schedule
//                     </button>
//                 </li>
//                 <li>
//                     <button className='btn sidebar-btn' onClick={handleSelect}>Fees
//                     </button>
//                 </li>
                
//             </ul>
//             {/* social icons */}
//             <ul className="social-icons">
//                 <li>
//                     <Link to='https://www.twitter.com'>
//                        <BsTwitter /> 
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to='https://www.instagram.com'>
//                        <BsInstagram /> 
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to='https://www.facebook.com'>
//                        <BsFacebook /> 
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to='https://www.youtube.com'>
//                        <BsYoutube /> 
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to='https://www.linkedin.com'>
//                        <BsLinkedin /> 
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     </aside>
//     <div className="sidebar-setting"></div>
//     </>
//   )
// }

// export default Sidebar