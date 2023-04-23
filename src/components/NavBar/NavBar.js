import {  AccountCircle,  AddCircle,   HomeWork ,Restaurant} from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useSelector } from 'react-redux'
import { useState } from "react"


function NavBar()
{
    const user=useSelector(state=>state.auth.user)
    const [visible,setVisible]=useState(false)
    return<>
    <nav className=" text-white">
        <Link  to={'/'}>
            <HomeWork/>
            <span>Hostel</span>
        </Link>
        <Link to={'/tiffin'}>
            <Restaurant/>
            <span>Tiffin</span>
        </Link>
        <Link onClick={()=>setVisible(v=>!v)} 
            style={{'position':'relative'}}>
            <AddCircle/>
            <span >Create</span>
            {
            visible&&(
            <div className=" service-menu ">
                <Link to={'/tiffin/create'}>Tiffin</Link>
                <Link to={'/hostel/create'}>Hostel</Link>
            </div>
            )
        }
        </Link>
        <Link to={user?'/profile':'/login'}>
            <AccountCircle/>
            <span>Profile</span>
        </Link>
        
    </nav>
    </>
}

export default NavBar