// import { Link } from "react-router-dom"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { apiRegister } from '../../http/serverAPI'
import './Register.css'

function Register(props)
{
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    return<>
        <div class="register-form">
            <div className='header'>
                Register
            </div>
            <form onSubmit={handleSubmbit}>
                <input type={'text'} value={firstname}
                    onChange={e=>setFirstName(e.target.value)}
                    placeholder='Firstname' required/>
                <input type={'text'} value={lastname} 
                    onChange={e=>setLastName(e.target.value)}
                    placeholder='Lastname' required/>
                <input type={'email'} value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Email' required/>
                <input type={'text'} value={username}
                    onChange={e=>setUserName(e.target.value)}
                    placeholder='Username' required/>
                <input type={'password'} value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder='Password' required/>
                {
                    error&&
                    <span className='alert alert-danger'>{error}</span>
                }
                {
                    success&&
                    <span className='alert alert-info'>{success}</span>

                }
                <input type={'submit'}
                    className='btn btn-primary '
                    value='Register'/>
                <hr/>
                <span className='login-text'>Already Have An Account?</span>
                <Link to={'/login'} className='btn btn-primary login'>Login</Link>
            </form>
        </div>
    </>
    function handleSubmbit(e)
    {
        e.preventDefault()
        apiRegister({
            firstname:firstname,
            lastname:lastname,
            username:username,
            email:email,
            password:password
        }).then(res=>{
            setSuccess(res.data)
        }).catch(e=>{
            if(e.response.status===400)
            {
                setError(e.response.data)
            }
            else if(e.response.status===500)
            {
                setError('Internal Server Error')
            }
        })
    }
}

export default Register