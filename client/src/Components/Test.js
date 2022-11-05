import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState';
import './Test.css'

const Test = () => {
  const state = useContext(GlobalState)
  const [token] = state.token
  const [marks,setMarks] = useState([])
  useEffect(() => { 
    if(token)
    {
        const getTest = async() => {
            try{
                const res = await axios
                .get('/test/info',
                {headers:{Authorization:token}}
                )
                setMarks(res.data.marks)
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
                <th>Chapters</th>
                <th>Marks Obt.</th>
                <th>Total Marks</th>
            </tr>
            <tr>
                <td>1</td>
                <td>12/06/2022</td>
                <td>1,2,3</td>
                <td>40</td>
                <td>50</td>
            </tr>
        </table>
    </div>
  )
}

export default Test