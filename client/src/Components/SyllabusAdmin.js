import React, { useContext, useState } from 'react'
import { GlobalState } from '../GlobalState'
import './SyllabusAdmin.css'

const SyllabusAdmin = () => {
  const state = useContext(GlobalState)
  const [token] = state.token
  const [item,setItem] = useState({
    sub:'',std:0,chapNo:'',chapName:'',chapStatus:false
  })
  const [isEditing,setIsEditing] = useState(false)
  const [subject,setSubject] = useState('')
  const [standard,setStandard] = useState('')

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleCheckbox = (e) => {
        const {name,value} = e.target;
        let val = true
        if(value==='true') val=false
        setItem({...item, [name] : val})
    }

  const handleCreate = async (e) => {
        if (isEditing) {
            setIsEditing(false)
            try {
                // const res = await axios.put(`/api/tests/${id}`, testDetails)
                // setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        else {
            try {
                // const res = await axios.post('/api/tests', testDetails)
                // setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        setItem({
            sub:'',std:0,chapNo:'',chapName:'',chapStatus:false
        })

    }

  return (
    <>
    <div className='test'>
      <div className="test-form">
        <div className="single-detail">
            <label >Subject</label>

            <input type="text" name="sub" required="required" placeholder='enter Subject' value={item.sub} onChange={handleChange} />

        </div>
        <div className="single-detail">
            <label >standard</label>

            <input type="text" name="std" required="required" placeholder='enter standard' value={item.std} onChange={handleChange} />

        </div>
        <div className="single-detail">
            <label >Chapter No.</label>

            <input type="text" name="chapNo" required="required" placeholder='enter subject' value={item.chapNo} onChange={handleChange} />
        </div>
        <div className="single-detail">
            <label >Chapter Name</label>

            <input type="text" name="chapName" required="required" placeholder='enter board' value={item.chapName} onChange={handleChange} />

        </div>
        <div className="single-detail">
            <label >Chapter Status</label>
            {/* chceckbox */}

            <input type="checkbox" className='checkbox-css' name="instThreeStatus" value={item.chapStatus} onChange={handleCheckbox} />

        </div>
        <div className="btn-container">
            <button type='submit' className='btn create-btn' onClick={handleCreate}>
                {isEditing ? 'EDIT' : 'Create'}
            </button>
        </div>
      </div>

      {/* <div className="syllabus-dropdown"> */}
        <div className="subject-dropdown ">
          <label htmlFor="" className='syllabus-label'>Subject :</label>
            <select value={subject} className='syllabus-select' onChange={handleChange}>
              <option value="English">English</option>
              <option value="SS">SS</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
            </select>

          <label htmlFor="" className='syllabus-label'>Standard :</label>
            <select value={standard} className='syllabus-select' onChange={handleChange}>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

        </div>
      </div>     

      <table className="fees-table">

        <tr>
          <th>Sr. No.</th>
          <th>Chapter No.</th>
          <th>Chapter Name</th>
          <th>Status</th>

        </tr>

      {/* {items.map((item) => {
          return <tr key={index}>
            <td>{index++}</td>
            <td>{item.chapNo}</td>
            <td>{item.chapName}</td>
            <td>{item.chapStatus}</td>
          </tr>
      })} */}

      </table>

    </>
  )
}

export default SyllabusAdmin