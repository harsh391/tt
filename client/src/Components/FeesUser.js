import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState'

const FeesUser = () => {
  const state = useContext(GlobalState)
  const [token] = state.token
  const [id,setId] = useState('')
  const [std,setStd] = useState('')
  const [tempFees,setTempFees] = useState({})
  const [tempInst,setTempInst] = useState({})

  useEffect(() => {

    if(token) {
      const getUser = async() => {
          try{
              const res = await axios.get('/user/info',
              {headers:{Authorization:token}}
              )
              setId(res.data._id)
              setStd(res.data.std)
          } catch (err) {
              alert(err.response.data.msg)
          }
      }
      getUser()
    }  
  },[])

  useEffect(() => {
    const getFees = async () => {
        try {
            const res = await axios.get(`/api/fees/${std}/${id}`)
            console.log(res.data);
            if(res.data.isCreate === true) {
                alert('No records found')
            }
            else {
                setTempFees(res.data.user)
            }
            setTempInst(res.data.inst)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    getFees()
  },[std,id])

  return (
    <div>
      <table className="fees-table">
        <tr>
            <th>Inst. No.</th>
            <th>Inst. Amount</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>1</td>
            <td>{tempInst.instOne}</td>
            <td>{tempFees.instOneStatus}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>{tempInst.instTwo}</td>
            <td>{tempFees.instTwoStatus}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{tempInst.instThree}</td>
            <td>{tempFees.instThreeStatus}</td>
        </tr>
      </table>
    </div>
  )
}

export default FeesUser