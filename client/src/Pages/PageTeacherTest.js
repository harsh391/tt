import React, { useContext } from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import TestTeacher from '../Components/TestTeacher';
import { GlobalState } from '../GlobalState';
import './UserScreen.css'

const PageTeacherTest = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.isLogged
  

  return (
    <div className='userScreen'>
      {/* {isLogged ? <> */}
        <Navbar />
        <div className='userScreenGrid'>
          <Sidebar />
          <div className='userContainer' style={{flex:'1'}}>
            <div className="user-container-option">
              <h4>Test</h4>
            </div>
            <TestTeacher />  
          </div>
        </div>   
        {/* </> :
        <h1>Please Log in</h1> 
      } */}
    </div>
  )
}


export default PageTeacherTest