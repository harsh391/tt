import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Marks.css'
import {BsPlusCircle} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'

const Marks = () => {
    // const marksId = useParams(:id)
    const [add,setAdd] = useState(false)
    const [marks,setMarks] = useState([])
    const [test,setTest] = useState({})
    const [id,setId] = useState('')
    const [editing,setEditing] = useState(false)
    const [obtMarks,setObtMarks] = useState('')
    const marksId = '62bca5af482d4b2bf32317aa'

    const handleChange = (e) => {
        setObtMarks(e.target.value)
    }

    const handleEdit = (_id,marks) => {
        setId(_id)
        setEditing(true)
        setObtMarks(marks)
    }

    const handleAdd = async () => {
        try {
            const res = await axios.put(`/api/marks/${id}`,{obtMarks:obtMarks})
            alert(res.data.msg)

            setAdd(!add)
            setEditing(false)
            setId('')
            setObtMarks('')
        } catch (err) {
            alert(err.response.data.msg)
        }

    }    

    useEffect(() => {
        const getMarks = async (marksId) => {
            try {
                    const res = await axios.get(`api/marks/${marksId}`)
                    setMarks(res.data.marks)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getMarks(marksId)

        const getTest = async (marksId) => {
            try {
                    const res = await axios.get(`/api/tests/${marksId}`)
                    console.log(res);
                    setTest(res.data.test)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getTest(marksId)

    },[add])

  return (
    <div className='marks'>
        <div className="test-details-container">
                <div className="single-info">
                    <h5>subject :  </h5>
                    <p>{test.sub}</p> 
                </div>
                <div className="single-info">
                    <h5>Date : </h5>
                    <p>{test.date}</p>
                </div>
                
                <div className="single-info">
                    <h5>Board : </h5>
                    <p>{test.board}</p>
                </div>
                <div className="single-info">
                    <h5>Medium : </h5>
                    <p>{test.medium}</p>
                </div>
                <div className="single-info">
                    <h5>Standard : </h5>
                    <p>{test.std}</p>
                </div>
                <div className="single-info">
                    <h5>Chapters : </h5>
                    <p>test.chapter</p>
                    {/* <p>{test.chapters}</p> */}
                </div>
        </div>
        <div className="edit-marks">
            <h5>Enter Marks to Edit : </h5>
            <input type="number" name='obtMarks' onChange={handleChange} value={obtMarks} className='obt-marks' />
            <button className='edit-btn' onClick={handleAdd}>
                <BsPlusCircle className='add-btn'/>
            </button>
        </div>
        <table className="marks-table">
            <tr>
                <th>Sr. No.</th>
                <th>Student Name</th>
                <th>Marks Obt.</th>
                <th>Total Marks</th>
                <th>Options</th>
            </tr>
            {/* mapping done here */}
            {marks.map((mark,index) => {
                return (
                <tr key={mark._id} className={(id===mark._id && editing) ? 'highlight-tr' : ''}>
                    <td>{++index}</td>
                    <td>{mark.userName}</td>
                    <td>{mark.marks}</td>
                    <td>50</td>
                    <td>
                        <button className='edit-btn' onClick={() => handleEdit(mark._id,mark.marks)}>
                            <BiEditAlt className={(id===mark._id && editing) ? 'add-filled-btn' : 'add-btn'}/>
                        </button>
                        
                    </td>
                </tr>
                )
            })}
            {/* <tr>
                    <td>1</td>
                    <td>Rahul Prajapati</td>
                    <td className='marks-td'>
                        <input type="number" name='obtMarks' onChange={handleChange} className='obt-marks' />
                        <BsPlusCircle className='add-btn'/>
                    </td>
                    <td>50</td>
            </tr> */}
        </table>
    </div>
  )
}

export default Marks