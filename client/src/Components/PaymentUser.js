import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState'

const PaymentUser = () => {
  const state = useContext(GlobalState)
  const [token] = state.token
  const [id,setId] = useState('')
  const [std,setStd] = useState('')
  const [tempFees,setTempFees] = useState({})
  const [tempInst,setTempInst] = useState({})
  const [add,setAdd] = useState(false)

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
            const res = await axios.get(`/api/payment/${std}/${id}`)
            console.log(res.data);
            setTempFees(res.data.payment)
            setTempInst(res.data.inst)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    getFees()
  },[std,id,add])

  const initPayment = ({data,details}) => {
    const options = {
      key:'rzp_test_ToHvc0N3skeE1W',
      amount:data.amount,
      currency:data.currency,
      name:'Installment',
      description:'Installment Payment',
      order_id:data.id,
      handler: async(response) => {
        try {
          const {data} = await axios.post('/api/payment/verify',{response:response,details:details})
          console.log(data);
          setAdd(!add)
        } catch (err) {
          console.log(err);
        }
      }
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open()
  }

  const handlePayment = async ({instAmount,instNo}) => {
    try {
      const {data}= await axios.post('/api/payment/orders',{amount:instAmount})
      console.log(data);
      const details = {paymentId:tempFees._id,instNo:instNo}
      initPayment({data:data.data,details:details})
    } catch (err) {
      console.log(err);
    }
  }

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
            <td>{tempFees.instOneStatus === "Unpaid" ? 
                <button className='btn create-btn' onClick = {() => handlePayment({instAmount:tempInst.instOne,instNo:'instOneStatus'})}>Pay</button> : "Paid"
                }
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>{tempInst.instTwo}</td>
            <td>{tempFees.instTwoStatus === "Unpaid" ? 
                <button className='btn create-btn' onClick={() => handlePayment({instAmount:tempInst.instTwo,instNo:'instTwoStatus'})}>Pay</button> : "Paid"
                }
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>{tempInst.instThree}</td>
            <td>{tempFees.instThreeStatus === "Unpaid" ? 
                <button className='btn create-btn' onClick={() => handlePayment({instAmount:tempInst.instThree,instNo:'instThreeStatus'})}>Pay</button> : "Paid"
                }
            </td>
        </tr>
      </table>
      {/* <div className="btn-container">
          <button className='btn create-btn' onClick={handlePayment}>Pay</button>
        </div> */}
    </div>
  )
}

export default PaymentUser




