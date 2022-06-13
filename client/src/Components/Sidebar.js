import React, { useContext } from 'react'
import "./Sidebar.css"
import {FaTimes} from 'react-icons/fa'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

const Sidebar = () => {
  const state = useContext(GlobalState)
  const [isSidebar] = state.isSidebar
  const [option,setOption] = state.option
  const closeSidebar = state.closeSidebar
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
                    <p>Harsh Solanki</p>
                    <p>English Medium</p>
                </div>
                <div>
                    <p>GSEB</p>
                    <p>7th Grade</p>
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