import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import UserContainer from '../Components/UserContainer'
import './UserScreen.css'


const UserScreen = () => {
  return (
    <div className='userScreen'>
        <Navbar />
        <div className='userScreenGrid'>
          <Sidebar />
          <UserContainer />  
        </div>      
    </div>
  )
}

export default UserScreen