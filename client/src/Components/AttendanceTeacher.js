import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './AttendanceTeacher.css'

const AttendanceTeacher = () => {
  const [sub,setSub] = useState('English')
  const [std,setStd] = useState('10')
  const [date,setDate] = useState('')
  const [users,setUsers] = useState([])

  const handleSub = (e) => {
    setSub(e.target.value)
  }
  const handleStd = (e) => {
    setStd(e.target.value);
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const createList = async (e) => {
    e.preventDefault()
    try {
      const list = await axios.post('/api/attendance',{std,sub,date})
      
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  // useEffect(() => {
  //   const getUsers = async(standard) => {
  //     try {
  //       const res = await axios.get(`/user/getUsersStd/${standard}`)
  //       setUsers(res.data)        
  //     } catch (err) {
  //       alert(err.response.data.msg)
  //     }
  //   }
  //   getUsers(standard)
  // },[standard,date])

  return (
    <div>
      <div className="syllabus-dropdown">
          <label htmlFor="" className='syllabus-label'>Subject :</label>
            <select value={sub} className='syllabus-select' onChange={handleSub}>
              <option value="English">English</option>
              <option value="SS">SS</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
            </select>

          <label htmlFor="" className='syllabus-label'>Standard :</label>
            <select value={std} className='syllabus-select' onChange={handleStd}>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

        </div>
        <div className="date-selection">
          <label >Date</label>
          <input type="date" name="date" required="required" placeholder='Enter Date' value={date} onChange={handleDate} />
          <div className="btn-container">
            <button className='btn create-btn' onClick={createList}>Create List</button>
          </div>
        </div>

    </div>
  )
}

export default AttendanceTeacher