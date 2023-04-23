import React, { useState } from 'react'
import './CreateTiffin.css'
import {apiCreateTiffin} from './../../http/serverAPI'
import { useNavigate } from 'react-router-dom'
export default function CreateTiffin() {

  const navigate=useNavigate()
  const[title,setTitle]=useState("")
  const[meals,setMeals]=useState("")
  const[city,setCity]=useState("")
  const[address,setAddress]=useState("")
  const[price,setPrice]=useState(0)
  const[mobileNumber,setMobileNumber]=useState(null)
  const [errors,setErrors]=useState({})

  return (
   <div className='create-tiffin card border-info my-2 mx-2'>
    <div className='card-header'>
      Create Tiffin Service
    </div>
    <div className='card-body'>
      <form className='container-fluid' onSubmit={handleSubmit}>

        <div className='field'>
          <span >Title :</span>
          <input type={'text'} value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Service Title Name' required/>
        </div>
        {
          errors?.title&&
          <div className='field-error'>{errors['title']}</div>
        }

        <div className='field'>
          <span >Meals:</span>
          <input type={'text'} value={meals}
            onChange={e=>setMeals(e.target.value)}
             placeholder='Meal Description' required/>
        </div>
        {
          errors?.meals&&
          <div className='field-error'>{errors['meals']}</div>
        }

        <div className='field'>
          <span >Price :</span>
          <input type={'number'} value={price}
            onChange={e=>setPrice(e.target.value)}
            min="1" max={"1000"}  placeholder='Enter Price Of Tiffin' required/>
        </div>
        {
          errors?.price&&
          <div className='field-error'>{errors['price']}</div>
        }

        <div className='field'>
          <span >City :</span>
          <input type={'text'}  value={city}
            onChange={e=>setCity(e.target.value)}
            placeholder='Enter City' required/>
        </div>
        {
          errors?.city&&
          <div className='field-error'>{errors['city']}</div>
        }

        <div className='field'>
          <span > Address :</span>
          <input type={'text'} vaue={address}
            onChange={e=>setAddress(e.target.value)}
            placeholder='Enter City' required/>
        </div>
        {
          errors?.address&&
          <div className='field-error'>{errors['address']}</div>
        }
        
        <div className='field'>
          <span >Mobile No :</span>
          <input type={'number'} value={mobileNumber}
            onChange={e=>setMobileNumber(e.target.value)}
             minLength={"10"} maxLength={"10"} placeholder='Enter Mobile  Number' required/>
        </div>
        {
          errors?.mobileNumber&&
          <div className='field-error'>{errors['mobileNumber']}</div>
        }

        <button type='submit'  className='btn  btn-outline-primary'>
          Create
        </button>
      </form>
    </div>
   </div> 
  )
  function handleSubmit(e)
  {
    e.preventDefault()
    let tiffin={
      title:title,
      meals:meals,
      price:price,
      city:city,
      address:address,
      mobileNumber:mobileNumber
    }
    apiCreateTiffin(tiffin).then(res=>{
      alert("CReated Tiffin SuccessFully")
      navigate('/profile')
    }).catch(e=>{
      if(e.response.status===400)
      {
        setErrors(e.response.data)
      }
      else
      {
        alert("Internal Server Error")
      }
    })
  }

}

