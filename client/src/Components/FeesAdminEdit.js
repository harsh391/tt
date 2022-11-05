import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './FeesAdminEdit.css'

const FeesAdminEdit = () => {
    const [name,setName] = useState('')
    const [add, setAdd] = useState(false);
    const [edit,setEdit] = useState(false)
    const userIdentity = useParams()

    const [fees,setFees] = useState({
        userId:userIdentity.id,
        instOneAmount:0,instTwoAmount:0,instThreeAmount:0,
        instOneStatus:false,instTwoStatus:false,instThreeStatus:false
    })

    const [tempFees,setTempFees] = useState({})

    useEffect(() => {
        const getFees = async () => {
            try {
                const res = await axios.get(`/api/fees/${userIdentity.id}`)
                setTempFees(res.data)
                if(res.data.isCreate === true) {
                    setEdit(false)
                }
                else {
                    setEdit(true)
                }
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        getFees()

        const getName = async() => {
        try {
            const res = await axios.get('/user/getUsers')
            setName(res.data.users.firstname + ' ' + res.data.users.lastname)
        } catch (err) {
            alert(err.response.data.msg)
        }

        }

        getName()
    },[add])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFees({ ...fees, [name]: value })
    }

    const handleCheckbox = (e) => {
        const {name, value} = e.target;
        let val = true
        if(value==='true') val=false
        setFees({...fees, [name] : val})
    }

    const handleClick = async (e) => {

        if (edit) {
            try {
                const res = await axios.put('/api/fees', fees)
                setAdd(!add)
                setEdit(true)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        else {
            try {
                const res = await axios.post('/api/fees', fees)
                setAdd(!add)
                setEdit(false)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }

        console.log(fees)
    }



  return (
    <div className="feesAdminEdit">

        <div className="test-form fees-edit-form">
                <div className="single-detail">
                    <label >Installment 1 Amount : </label>

                    <input type="number" name="instOneAmount" required="required" placeholder='Enter Amount' value={fees.instOneAmount} onChange={handleChange} />

                </div>

                <div className="single-detail">
                    <label >Installment 1 Status : </label>

                    <input type="checkbox" className='checkbox-css' name="instOneStatus" value={fees.instOneStatus} onChange={handleCheckbox} />

                </div>

                <div className="single-detail">
                    <label >Installment 2 Amount : </label>

                    <input type="number" name="instTwoAmount" required="required" placeholder='Enter Amount' value={fees.instTwoAmount} onChange={handleChange} />

                </div>

                <div className="single-detail">
                    <label >Installment 2 Status : </label>

                    <input type="checkbox" name="instTwoStatus"  className='checkbox-css' value={fees.instTwoStatus} onChange={handleCheckbox} />

                </div>

                <div className="single-detail">
                    <label >Installment 3 Amount : </label>

                    <input type="number" name="instThreeAmount" required="required" placeholder='Enter Amount' value={fees.instThreeAmount} onChange={handleChange} />

                </div>

                <div className="single-detail">
                    <label >Installment 3 Status : </label>

                    <input type="checkbox" className='checkbox-css' name="instThreeStatus" value={fees.instThreeStatus} onChange={handleCheckbox} />

                </div>
            </div>

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


            <div className="btn-container">
                <button className='btn create-btn' onClick={handleClick}>{edit ? 'Edit' : 'create'}</button>
            </div>
    </div>
  )
}

export default FeesAdminEdit