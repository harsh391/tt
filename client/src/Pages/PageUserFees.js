import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { GlobalState } from '../GlobalState'
import FeesUser from '../Components/FeesUser'

const PageUserFees = () => {
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
            <FeesUser />  
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageUserFees




