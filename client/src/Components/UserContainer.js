
import React, { useContext} from 'react'
import { GlobalState } from '../GlobalState'
import Test from './Test'
import './UserContainer.css'

const UserContainer = () => {
  const state = useContext(GlobalState)
  const [option] = state.option
  const [subject] = state.subject

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