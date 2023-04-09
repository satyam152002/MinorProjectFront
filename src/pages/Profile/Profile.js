import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/auth/authSlice'

export default function Profile() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='container'>
      Profile
      <button className='btn btn-danger'
        onClick={handleLogout}
        >
        Logout
      </button>
    </div>
  )
  function handleLogout()
  {
    dispatch(logout())
    navigate('/login')
  }
}
