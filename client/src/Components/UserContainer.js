
import React, { useContext} from 'react'
import { GlobalState } from '../GlobalState'
import Marks from './Marks'
import Register from './Register'
import Test from './Test'
import TestAdmin from './TestAdmin'
import Schedule from './Schedule'
import FeesUser from './FeesUser'
import './UserContainer.css'
import FeesAdmin from './FeesAdmin'
import SyllabusUser from './SyllabusUser'

const UserContainer = () => {
  const state = useContext(GlobalState)
  const [option,setOption] = state.option
  const [subject] = state.subject
  const [isAdmin] = state.isAdmin

  return (
    <>
    
        <div className='userContainer' style={{flex:'1'}}>
          <div className="user-container-option">
            <h4>{option}</h4>
          </div>
          {/* Admin */}
          {isAdmin ? 
          option==='Register' ? <Register /> : <TestAdmin /> 
          : 
          option==='Syllabus' ? <SyllabusUser /> :
          option==='Schedule' ? <Schedule /> : 
          option==='Fees' ? <FeesAdmin /> : <FeesUser />  }
        </div>
    </>
  )
}

export default UserContainer