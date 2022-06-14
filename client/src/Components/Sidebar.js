import React, { useContext, useEffect, useState } from 'react'
import "./Sidebar.css"
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
  
  const handleClick = (e) => {
    e.preventDefault()
    closeSidebar()
  }
  const handleSelect = (e) => {
    e.preventDefault()
    setOption(e.target.innerText)
    closeSidebar()
  }
  return (
    <>
    <aside className='sidebar' style={isSidebar ? {transform:'translateX(0)'}: {} }>
        <div>
            <button className="close-btn" onClick={handleClick}>
                <FaTimes />
            </button>
            {/* Avatar and name */}
            <div className="sidebarInfo">
                <CgProfile className='profileIcon'/>
                <div>
                    <p>{user.name}</p>
                    <p>{user.medium} medium</p>
                </div>
                <div>
                    <p>{user.board}</p>
                    <p>{user.std}th grade</p>
                </div>
            </div>
            {/* links */}
            <ul className="sidebar-links">
                <li>
                    <button className='btn sidebar-btn' onClick={handleSelect}>Test
                    </button>
                </li>
                <li>
                    <button className='btn sidebar-btn' onClick={handleSelect}>Syllabus
                    </button>
                </li>
                <li>
                    <button className='btn sidebar-btn' onClick={handleSelect}>Schedule
                    </button>
                </li>
                <li>
                    <button className='btn sidebar-btn' onClick={handleSelect}>Fees
                    </button>
                </li>
                
            </ul>
            {/* social icons */}
            <ul className="social-icons">
                <li>
                    <Link to='https://www.twitter.com'>
                       <BsTwitter /> 
                    </Link>
                </li>
                <li>
                    <Link to='https://www.instagram.com'>
                       <BsInstagram /> 
                    </Link>
                </li>
                <li>
                    <Link to='https://www.facebook.com'>
                       <BsFacebook /> 
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com'>
                       <BsYoutube /> 
                    </Link>
                </li>
                <li>
                    <Link to='https://www.linkedin.com'>
                       <BsLinkedin /> 
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
    <div className="sidebar-setting"></div>
    </>
  )
}

export default Sidebar