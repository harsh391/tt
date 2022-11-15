import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState';
import './Test.css'

const Test = () => {
  const state = useContext(GlobalState)
  const [token] = state.token
  const [marks,setMarks] = useState([])
  let index=0
  useEffect(() => { 
    if(token)
    {
        const getTest = async() => {
            try{
                const res = await axios
                .get('/api/marks',
                {headers:{Authorization:token}}
                )
                setMarks(res.data);
                // setMarks(res.data)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getTest()
    }   
  },[token])
  return (
    <div className='test'>
        <table className="test-table">
            <tr>
                <th>Sr. No.</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Chapters</th>
                <th>Marks Obt.</th>
                <th>Total Marks</th>
            </tr>
            {/* <tr>
                <td>1</td>
                <td>12/06/2022</td>
                <td>SS</td>
                <td>1,2,3</td>
                <td>40</td>
                <td>50</td>
            </tr> */}
            {marks.map((mark) => {
                return (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{mark.date}</td>
                        <td>{mark.sub}</td>
                        <td>{mark.chap}</td>
                        <td>{mark.obtMarks}</td>
                        <td>{mark.totalMarks}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Test