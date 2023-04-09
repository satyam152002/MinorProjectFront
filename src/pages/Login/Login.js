import React from 'react'
import {  useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const[username,setUserName]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')
  return (<>
        <div class="login-form">
            <div className='header'>
                Login
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className='username-input'>
                    <span className='icon'>
                        <i className='fa fa-user'></i> 
                    </span>
                    <input type={'text'} value={username} 
                        onChange={e=>setUserName(e.target.value)}
                        placeholder='Username' required />
                </div>
                <div className='password-input'>
                    <span className='icon'>
                        <i className='fa fa-lock'></i> 
                    </span>
                    <input type={'password'} value={password}
                        onChange={e=>setPassword(e.target.value)} 
                        placeholder='Password'  required/>
                </div>
                {error&&<span className='alert alert-danger'>{error}</span>}
                <input type={'submit'}
                    className='btn btn-primary '
                    value='Login'/>
                <hr/>
                <span className='register-text'>Or Create A New Account ?</span>
                <Link to={'/register'} className='btn btn-primary register'>Register</Link>
            </form>
        </div>
  </>
  )
  async function handleSubmit(e)
  {
    e.preventDefault()
  }
}
