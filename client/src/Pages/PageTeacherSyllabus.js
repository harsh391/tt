import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import { GlobalState } from '../GlobalState'
import SyllabusTeacher from '../Components/SyllabusTeacher'


const PageTeacherSyllabus = () => {

    const state = useContext(GlobalState)
    const [isLogged] = state.isLogged

    return (
        <div className='userScreen'>
            <Navbar />
                <div className='userScreenGrid'>
                    <Sidebar />
                    <div className='userContainer' style={{ flex: '1' }}>
                        <div className="user-container-option">
                            <h4>Syllabus</h4>
                        </div>
                        <SyllabusTeacher />
                    </div>
                </div>
            {/* {isLogged ? <>
                <Navbar />
                <div className='userScreenGrid'>
                    <Sidebar />
                    <div className='userContainer' style={{ flex: '1' }}>
                        <div className="user-container-option">
                            <h4>Syllabus</h4>
                        </div>
                        <SyllabusTeacher />
                    </div>
                </div>
            </> :
                <h1>Please Log in</h1> */}
            {/* } */}
        </div>
    )
}

export default PageTeacherSyllabus