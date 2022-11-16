import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import TeacherRegister from '../Components/TeacherRegister'
import { GlobalState } from '../GlobalState'

const PageTeacherRegister = () => {

    const state = useContext(GlobalState)
    const [isLogged] = state.isLogged

    return (
        <div className='userScreen'>
            
                <Navbar />
                <div className='userScreenGrid'>
                    <Sidebar />
                    <div className='userContainer' style={{ flex: '1' }}>
                        <div className="user-container-option">
                            <h4>Teacher Register</h4>
                        </div>
                        <TeacherRegister />
                    </div>
                </div>
            
        </div>
    )
}

export default PageTeacherRegister