import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import FeesAdminEdit from '../Components/FeesAdminEdit'
import { GlobalState } from '../GlobalState'

const PageAdminFeesEdit = () => {
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
              <h4>Fees Edit</h4>
            </div>
            <FeesAdminEdit />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageAdminFeesEdit



