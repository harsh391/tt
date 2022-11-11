import React, { useContext, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import FeesAdmin from '../Components/FeesAdmin'
import { GlobalState } from '../GlobalState'
import FeesAdminInst from '../Components/FeesAdminInst'
import './PageAdminFees.css'


const PageAdminFees = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.isLogged
  const [option,setOption] = useState('students')

  return (
    <div className='userScreen'>
      {isLogged ? <>
        <Navbar />
        <div className='userScreenGrid'>
          <Sidebar />
          <div className='userContainer' style={{flex:'1'}}>
            <div className="user-container-option option-bar">
              <button className={option==='installments' ? 'option-button-selected' : 'option-button'} onClick={() => setOption('installments')}>Installment</button>
              <button className={option==='students' ? 'option-button-selected' : 'option-button'} onClick={() => setOption('students')}>Students</button>
            </div>
            {option === 'installments' ? <FeesAdminInst /> : <FeesAdmin /> }
             
          </div>
        </div>   
        </> :
        <h1>Please Log in</h1> 
      }
    </div>
  )
}

export default PageAdminFees