import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { apiLogout } from '../../http/serverAPI'
import { logout } from '../../store/auth/authSlice'
import './Profile.css'
export default function Profile() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.auth.user)
  const navigate=useNavigate()
  return (
    <div className='card bg-light profile'>
      <div className='card-header'>
          Profile
      </div>
      <div className='card-body'>
        <DetailCard user={user}/>
        <ServiceCard/>
      </div>
      <button onClick={handleLogout} className='btn btn-outline-danger '>Logout</button>
    </div>
  )
  function handleLogout()
  {
    apiLogout().then(res=>{

      dispatch(logout())
      navigate('/login')
    }).catch(e=>{
      alert("Failed To Logout")
    })
  }
}

function DetailCard({user})
{
  return<>
    <div className='detail card border-info'>
      <div className='card-header'>
        Personal Info
      </div>
      <div className='card-body'>
        <div className='field text-primary bg-light'>
          <span className='key'>Username</span>
          <span className='value'>{user.username}</span>
        </div>
        <div className='field text-primary bg-light'>
          <span className='key'>FirstName</span>
          <span className='value'>{user.firstname}</span>
        </div>
        <div className='field text-primary bg-light'>
          <span className='key '>LastName</span>
          <span className='value'>{user.lastname}</span>
        </div>
        <div className='field text-primary bg-light'>
          <span className='key'>Email</span>
          <span className='value'>{user.email}</span>
        </div>
      </div>
    </div>
  </>
}

function ServiceCard()
{
  return<>
    <div className='service card border-info'>
      <div className='card-header'>
        Services
      </div>
      <div className='card-body'>
        <div className='alert alert-primary '>
          Tiffin Service
        </div>
        <div className='alert alert-primary'>
          Hostel Service
        </div>
      </div>
    </div>
  </>
}