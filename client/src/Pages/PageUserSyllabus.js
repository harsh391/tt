import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import { GlobalState } from '../GlobalState';
import SyllabusUser from '../Components/SyllabusUser';
import './UserScreen.css'


const PageUserSyllabus = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.isLogged
  

  return (
    <div className='userScreen'>
      {isLogged ? <>
        <Navbar />
        <div className='userScreenGrid'>
          <Sidebar />
          <div className='userContainer' style={{flex:'1'}}>
            <div className="user-container-option">
              <h4>Syllabus</h4>
            </div>
            <SyllabusUser />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageUserSyllabus