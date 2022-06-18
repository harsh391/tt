import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Marks.css'
import {BsPlusCircle} from 'react-icons/bs'

const Marks = () => {
    // const marksId = useParams(:id)
    const [marks,setMarks] = useState([])
    const [obtMarks,setObtMarks] = useState('')
    const marksId = '62ada613be00aca31442b5d4'

    const handleChange = (e) => {
        setObtMarks(e.target.value)
    }
    const handleClick = () => {
        try {
            
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
    },[])
  return (
    <div className='marks'>
        
        <table className="marks-table">
            <tr>
                <th>Sr. No.</th>
                <th>Student Name</th>
                <th>Marks Obt.</th>
                <th>Total Marks</th>
            </tr>
            <tr>
                    <td>1</td>
                    <td>Rahul Prajapati</td>
                    <td>
                        <input type="number" name='obtMarks' className='obt-marks' />
                    </td>
                    <td>50</td>
            </tr>
            {/* mapping done here */}
            {/* {marks.map((mark,index) => {
                return (
                <tr>
                    <td>{++index}</td>
                    <td>{mark.userName}</td>
                    <td>{mark.marks}</td>
                    <td>50</td>
                </tr>
                )
            })} */}
            <tr>
                    <td>1</td>
                    <td>Rahul Prajapati</td>
                    <td className='marks-td'>
                        <input type="number" name='obtMarks' onChange={handleChange} className='obt-marks' />
                        <BsPlusCircle className='add-btn' onClick={handleClick}/>
                    </td>
                    <td>50</td>
            </tr>
        </table>
    </div>
  )
}

export default Marks