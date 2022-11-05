import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import SyllabusAdmin from '../Components/SyllabusAdmin'
import { GlobalState } from '../GlobalState'

const PageAdminFees = () => {
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
            <SyllabusAdmin />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageAdminFees