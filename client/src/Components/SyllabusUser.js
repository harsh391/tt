import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {GlobalState} from '../GlobalState'
import './SyllabusUser.css'

const SyllabusUser = () => {

  const state = useContext(GlobalState)
  const [token] = state.token
  const [subject,setSubject] = useState('')
  const [std,setStd] = useState() 

  // useEffect(() => {

      // if(token) {
      //       const getUser = async () => {
      //           try {
      //               const res = await axios.get('/user/info',
      //               {
      //                   headers: {Authorization: token}
      //               })
      //               setStd(res.data.std)
      //           } catch (err) {
      //               alert(err.response.data.msg)
      //           }
      //       }
      //       getUser()
      //   }
    
  //     const getItems = async (subject) => {
  //       try {
          // const res = await axios.get(`/api/syllabus?std=${std}&${subject}`)
  //         setItems(res.data.items)
          
  //       } catch (err) {
  //         alert(err.response.data.msg)
  //       }
  //     }

  //     getItems(subject)


  // },[subject,std])

  let index=1
  const [items,setItems] = useState([{
    chapNo:1,
    chapName:'abc',
    chapStatus:'Completed'
  }])
  
  const handleChange = (e) => {
    setSubject(e.target.value)
  }
  return (
    <div className="syllabus-user">
      <div className="subject-dropdown">
        <label htmlFor="" className='syllabus-label'>Subject :</label>
            <select value={subject} className='syllabus-select' onChange={handleChange}>
              <option value="English">English</option>
              <option value="SS">SS</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
            </select>
      </div>
      <table className="fees-table">

      <tr>
        <th>Sr. No.</th>
        <th>Chapter No.</th>
        <th>Chapter Name</th>
        <th>Status</th>

      </tr>

      {items.map((item) => {
          return <tr key={index}>
            <td>{index++}</td>
            <td>{item.chapNo}</td>
            <td>{item.chapName}</td>
            <td>{item.chapStatus}</td>
          </tr>
      })}

    </table>

    </div>
    
  )
}

export default SyllabusUser