import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState'

const FeesUser = () => {
  const [tempFees,setTempFees] = useState({})
  const state = useContext(GlobalState)
  const [token] = state.token

  useEffect(() => {
      const getFees = async () => {
          try {
            const res = await axios.get(`/api/fees/${token}`)
            setTempFees(res.data)
          } catch (err) {
            alert(err.response.data.msg)
          }
      }

      getFees()

  },[])
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
            <td>{tempFees.instOneAmount}</td>
            <td>{tempFees.instOneStatus === true ? 'Paid' : 'Unpaid'}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>{tempFees.instTwoAmount}</td>
            <td>{tempFees.instTwoStatus === true ? 'Paid' : 'Unpaid'}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{tempFees.instThreeAmount}</td>
            <td>{tempFees.instThreeStatus === true ? 'Paid' : 'Unpaid'}</td>
        </tr>
      </table>
    </div>
  )
}

export default FeesUser