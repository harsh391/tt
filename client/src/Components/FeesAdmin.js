import React, { useEffect, useState } from 'react'
import './FeesAdmin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FeesAdmin = () => {
  const [students,setStudents] = useState([])
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
    
    <table className="fees-table">

      <tr>
        <th>Name</th>
        <th>Standard</th>

      </tr>

      {students.map((student) => {
        if(student.firstname !== 'admin' && student.lastname !== 'admin') {
          return <tr key={student._id}>
            <td><Link to={`/admin/fees/${student._id}`}>{student.firstname + ' ' + student.lastname}</Link></td>
            <td>{student.std}</td>
          </tr>
        }
      })}

    </table>
  )
}

export default FeesAdmin