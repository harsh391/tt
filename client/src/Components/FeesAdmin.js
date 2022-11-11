import React, { useEffect, useState } from 'react'
import './FeesAdmin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FeesAdmin = () => {
  const [students,setStudents] = useState([])
  const [standard,setStandard] = useState('7')
  let index=1
  const handleStd = (e) => {
      setStandard(e.target.value)
    }
  useEffect(() => {

    const getStudents = async() => {
      try {
        const res = await axios.get('/user/getUsers')
          setStudents(res.data.users)
      } catch (err) {
        alert(err.response.data.msg)
      }

    }

    getStudents()
  },[])

  return (
    <>

    <div className="syllabus-dropdown">
      <label htmlFor="" className='syllabus-label'>Standard :</label>
        <select value={standard} className='syllabus-select' onChange={handleStd}>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
    </div>
    
    <table className="fees-table">

      <tr>
        <th>Sr No.</th>
        <th>Name</th>
        <th>Standard</th>

      </tr>

      {students.map((student) => {
        if(student.firstname !== 'admin' && student.lastname !== 'admin') {
          return <tr key={student._id}>
            <td>{index++}</td>
            <td><Link to={`/admin/fees/${student.std}/${student._id}`}>{student.firstname + ' ' + student.lastname}</Link></td>
            <td>{student.std}</td>
          </tr>
        }
      })}

    </table>

    </>
  )
}

export default FeesAdmin