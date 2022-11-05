import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import FeesAdmin from '../Components/FeesAdmin'
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
              <h4>Fees</h4>
            </div>
            <FeesAdmin />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageAdminFees