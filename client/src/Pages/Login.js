import React,{useEffect,useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        window.location.href = './UserScreen'
    }

return (
    <div className='login_container'>
        <div className='login_form_wrap'>
            <h1 className='login_header'>Login</h1>
            <form>
                <div className='login_form_group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username'/>
                </div>
                <div className='login_form_group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password'/>
                </div>
                <button className='login_btn' type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
        {/* <footer className='login_footer'>
            <p>Don't Have an account ? <Link to='/Register' className='login_footer_link'>Register</Link></p>
        </footer> */}
    </div>
)
}

export default Login