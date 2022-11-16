import axios from "axios"
import { useState } from "react"
import './TeacherRegister.css'

const TeacherRegister = () => {

    const [teacher, setTeacher] = useState({
        firstname: '', lastname: '', email: ''
    })
    const [subject, setSubject] = useState('English')
    const [standard, setStandard] = useState('7')
    const [classes, setClasses] = useState([])
    const [item, setItem] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setTeacher({ ...teacher, [name]: value })
    }

    const handleSub = (e) => {
        setSubject(e.target.value)
        setItem({ ...item, sub: subject })
    }
    const handleStd = (e) => {
        setStandard(e.target.value)
        setItem({ ...item, std: standard })
    }

    const handleAdd = (e) => {
        e.preventDefault()
        // let arr = classes
        // arr.push({ std: standard, sub: subject })
        // setClasses([...classes, arr])
        setClasses([...classes, { std: standard, sub: subject }])
        console.log(classes);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/teacher',{teacher:{...teacher},classes:[...classes]})
            if(res.data.creation===true) alert('Registeration Successful.')
            setTeacher({
                firstname: '', lastname: '', email: ''
            })
            setClasses([])
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <section>
            <div className='register_Container'>
                <h3 className='register_h3'>Register</h3>
                <div className='register_Form'>
                    <div className='register_fromControl'>
                        <label htmlFor="firstname" className='register_label'>First Name</label>
                        <input required={true} type="text" className='register_input' name='firstname' value={teacher.firstname} onChange={handleChange} />
                    </div>

                    <div className='register_fromControl'>
                        <label htmlFor="lastname" className='register_label'>Last Name</label>
                        <input required={true} type="text" className='register_input' name='lastname' value={teacher.lastname} onChange={handleChange} />
                    </div>

                    <div className='register_fromControl'>
                        <label htmlFor="email" className='register_label'>Email</label>
                        <input required={true} type="text" className='register_input' name='email' value={teacher.email} onChange={handleChange} />
                    </div>



                </div>
                <div className='teacher-info'>
                    <div>
                        <label htmlFor="" className='syllabus-label'>Subject :</label>
                        <select className='syllabus-select' onChange={handleSub}>
                            <option value="English">English</option>
                            <option value="SS">SS</option>
                            <option value="Maths">Maths</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="" className='syllabus-label'>Standard :</label>
                        <select className='syllabus-select' onChange={handleStd}>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div><button className='teacher_btn' onClick={handleAdd}>Add</button></div>

                </div>


                <div>
                    {classes.map((temp) => {
                        return (
                            <div className='info'>
                                <p>Standard : {temp.std}</p>
                                <p>Subject : {temp.sub}</p>
                            </div>
                        )
                    })}
                </div>


                <div className='register_footer'>
                    <button className='register_btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </section>
    )
}

export default TeacherRegister