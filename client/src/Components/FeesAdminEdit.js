import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './FeesAdminEdit.css'

const FeesAdminEdit = () => {
    const [name,setName] = useState('')
    const [add, setAdd] = useState(false);
    const [edit,setEdit] = useState(false)
    const userIdentity = useParams().id
    const std = useParams().std

    const [fees,setFees] = useState({
        userId:userIdentity.id,
        instOneStatus:'',instTwoStatus:'',instThreeStatus:''
    })

    const [tempFees,setTempFees] = useState({})
    const [tempInst,setTempInst] = useState({})

    useEffect(() => {
        const getFees = async () => {
            try {
                const res = await axios.get(`/api/fees/${std}/${userIdentity.id}`)
                console.log(res.data);
                if(res.data.isCreate === true) {
                    alert('Please Add status')
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

    const handleEdit = () => {
        setEdit(true)
        setFees(tempFees)
    }

    const handleClick = async (e) => {

        if (edit) {
            try {
                const res = await axios.put('/api/fees', fees)
                setAdd(!add)
                setEdit(false)
                setFees({userId:userIdentity.id,instOneStatus:'',instTwoStatus:'',instThreeStatus:''})
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        else {
            try {
                const res = await axios.post('/api/fees', fees)
                setAdd(!add)
                setFees({userId:userIdentity.id,instOneStatus:'',instTwoStatus:'',instThreeStatus:''})
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
    }



  return (
    <div className="feesAdminEdit">

        <div className="test-form">
                <div className="single-detail">
                    <label >Installment 1 Status : </label>

                    <input type="text" name="instOneStatus" required="required" placeholder='Paid/Unpaid' value={fees.instOneStatus} onChange={handleChange} />


                </div>
                <div className="single-detail">
                    <label >Installment 2 Status : </label>

                    <input type="text" name="instTwoStatus" required="required" placeholder='Paid/Unpaid' value={fees.instTwoStatus} onChange={handleChange} />

                </div>
                <div className="single-detail">
                    <label >Installment 3 Status : </label>

                    <input type="text" name="instThreeStatus" required="required" placeholder='Paid/Unpaid' value={fees.instThreeStatus} onChange={handleChange} />

                </div>
            </div>

            <div className="btn-container save-btn">
                <button className='btn create-btn' onClick={handleClick}>Save</button>
            </div>

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


            <div className="btn-container">
                <button className='btn create-btn' onClick={handleEdit}>Edit</button>
            </div>
    </div>
  )
}

export default FeesAdminEdit