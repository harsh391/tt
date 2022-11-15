import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { GlobalState } from '../GlobalState'
import './SyllabusAdmin.css'

const SyllabusTeacher = () => {
  const state = useContext(GlobalState)
  const [token] = state.token
  const [item,setItem] = useState({
    sub:'',std:'',chapNo:'',chapName:'',chapStatus:''
  })
  const [sylls, setSylls] = useState([]);
  const [isEditing,setIsEditing] = useState(false)
  const [subject,setSubject] = useState('English')
  const [standard,setStandard] = useState('10')
  const [add,setAdd] = useState(false)
  const [id,setId] = useState('')
  let index=1

  useEffect(() => {
    const getChapters = async (subject,standard) => {
      try {
        const res = await axios.get(`/api/syllabus/${standard}/${subject}`)
        setSylls(res.data)
        
      } catch (err) {
        alert(err.response.data.msg)
        
      }
    }
    getChapters(subject,standard)

  },[standard,subject,add])

  const handleChange = (e) => {
    const {name,value} = e.target
    setItem({...item,[name]:value})
  }

    const handleSub = (e) => {
      setSubject(e.target.value)
    }
    const handleStd = (e) => {
      setStandard(e.target.value)
    }

  const handleCreate = async (e) => {
        if (isEditing) {
            setIsEditing(false)
            try {
                const res = await axios.put(`/api/syllabus/${id}`, item)
                setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        else {
            try {
                const res = await axios.post('/api/syllabus', item)
                setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        setItem({
            sub:'',std:'',chapNo:'',chapName:'',chapStatus:''
        })

    }

    const handleDelete = async (_id) => {
        try {
            await axios.delete(`/api/syllabus/${_id}`)
            setAdd(!add);
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleEdit = (syll) => {
        setIsEditing(true);
        setId(syll._id)
        const { std,sub,chapNo,chapName,chapStatus } = syll;

        setItem({
            std: std, sub: sub, chapNo:chapNo,chapName:chapName,chapStatus:chapStatus
        })
    }

  return (
    <>
    <div className='test syllabusAdmin'>
      <div className="test-form">
        <div className="single-detail">
            <label >Subject</label>

            <input type="text" name="sub" required="required" placeholder='enter subject' value={item.sub} onChange={handleChange} />

        </div>
        <div className="single-detail">
            <label >standard</label>

            <input type="text" name="std" required="required" placeholder='enter standard' value={item.std} onChange={handleChange} />

        </div>
        <div className="single-detail">
            <label >Chapter No.</label>

            <input type="text" name="chapNo" required="required" placeholder='enter chapter number' value={item.chapNo} onChange={handleChange} />
        </div>
        <div className="single-detail">
            <label >Chapter Name</label>

            <input type="text" name="chapName" required="required" placeholder='enter chap name' value={item.chapName} onChange={handleChange} />

        </div>
        <div className="single-detail">
            <label >Chapter Status</label>

            <input type='text' name="chapStatus" required="required" placeholder='enter chapter Status' value={item.chapStatus} onChange={handleChange} />

        </div>
        <div className="btn-container">
            <button type='submit' className='btn create-btn' onClick={handleCreate}>
                {isEditing ? 'EDIT' : 'Create'}
            </button>
        </div>

      </div>
    </div>

      {/* <div className="syllabus-dropdown"> */}
        <div className="syllabus-dropdown">
          <label htmlFor="" className='syllabus-label'>Subject :</label>
            <select value={subject} className='syllabus-select' onChange={handleSub}>
              <option value="English">English</option>
              <option value="SS">SS</option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
            </select>

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

      <div className="test">'
        <table className="test-table">

          <tr key={item._id} className={(id===item._id && isEditing) ? 'edit-tr' : ''}>
            <th>Sr. No.</th>
            <th>Chapter No.</th>
            <th>Chapter Name</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        {sylls.map((syll) => {
            return (
            <tr key={index}>
              <td>{index++}</td>
              <td>{syll.chapNo}</td>
              <td>{syll.chapName}</td>
              <td>{syll.chapStatus}</td>
              <td>
                <button className='edit-btn-dif' onClick={() => handleDelete(syll._id)}> <RiDeleteBin7Fill className='add-btn' /></button>

                <button className='edit-btn-dif' onClick={() => handleEdit(syll)}> <BiEditAlt className='add-btn' />
                </button>
              </td>
            </tr> 
            )
        })}

        </table>
      </div>

    </>
  )
}

export default SyllabusTeacher