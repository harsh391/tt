import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'

const FeesAdminInst = () => {
    const [inst,setInst] = useState({
        std:'',instOne:'',instTwo:'',instThree:''
    })
    const [items,setItems] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [add,setAdd] = useState(false)
    const [id,setId] = useState('')
    let index=0

    const handleChange = (e) => {
        const {name, value} = e.target
        setInst({...inst,[name]:value})
    }

    const handleEdit = (item) => {
        setIsEditing(true);
        setId(item._id)
        const { std,instOne, instTwo, instThree } = item

        setInst({
            std: std, instOne:instOne,instTwo:instTwo,instThree:instThree
        })
    }

    const handleClick = async (e) => {
        if (isEditing) {
            try {
                const res = await axios.put(`/api/inst/${id}`,inst)
                setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
            setIsEditing(false)
        }
        else {
            try {
                const res = await axios.post('/api/inst', inst)
                setAdd(!add)
            } catch (err) {
                alert(err.response.data.msg)
            }
        }
        setInst({
        std:'',instOne:'',instTwo:'',instThree:''
    })
    }

    useEffect(() => {
        const getInsts = async () => {
            try {
                const res = await axios.get('/api/insts')
                setItems(res.data)
                
            } catch (err) {
                alert(err.response.data.msg)
                
            }
        }

        getInsts()

    },[add])

  return (
    <div>
        <div className="test-form">
            <div className="single-detail">
                <label >Inst. one</label>
                <input type="text" name="instOne" required="required" placeholder='enter amount' value={inst.instOne} onChange={handleChange} />
            </div>
            <div className="single-detail">
                <label >Inst. two</label>
                <input type="text" name="instTwo" required="required" placeholder='enter amount' value={inst.instTwo} onChange={handleChange} />
            </div>
            <div className="single-detail">
                <label >Inst. three</label>
                <input type="text" name="instThree" required="required" placeholder='enter amount' value={inst.instThree} onChange={handleChange} />
            </div>
            <div className="single-detail">
                <label >Standard</label>
                <input type="text" name="std" required="required" placeholder='enter Standard' value={inst.std} onChange={handleChange} />
            </div>
            <div className="btn-container save-btn">
                <button className='btn create-btn' onClick={handleClick}>{isEditing ? 'Edit' : 'Save'}</button>
            </div>

        </div>

        <table className="fees-table">
            <tr>
                <th>Sr. No.</th>
                <th>Standard</th>
                <th>Inst. One</th>
                <th>Inst. Two</th>
                <th>Inst. Three</th>
                <th>Actions</th>
            </tr>            
            {items.map((item) => {
                return (
                <tr key={item.std} className={(id===item._id && isEditing) ? 'edit-tr' : ''} >
                    <td>{++index}</td>
                    <td>{item.std}</td>
                    <td>{item.instOne}</td>
                    <td>{item.instTwo}</td>
                    <td>{item.instThree}</td>
                    <td><button className='edit-btn-dif' onClick={() => handleEdit(item)}> <BiEditAlt className='add-btn' />
                    </button></td>
                </tr>
                )
            })}
            
        </table>

    </div>
  )
}

export default FeesAdminInst