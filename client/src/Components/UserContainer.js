
import React, { useContext} from 'react'
import { GlobalState } from '../GlobalState'
import Marks from './Marks'
import Test from './Test'
import TestAdmin from './TestAdmin'
import './UserContainer.css'

const UserContainer = () => {
  const state = useContext(GlobalState)
  const [option] = state.option
  const [subject] = state.subject
  const [isAdmin] = state.isAdmin

  return (
    <>
        <div className='userContainer' style={{flex:'1'}}>
          <div className="user-container-option">
            <h4>{option || 'test'}</h4>
          </div>
          {option==='Syllabus' ? 'syllabus' :
          option==='Schedule' ? 'schedule' : 
          option==='Fees' ? 'fees' : <Test />  }
        </div>
    </>
  )
}

export default UserContainer