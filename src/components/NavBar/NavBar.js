import {  AccountCircle,  AddCircle,   HomeWork ,Restaurant} from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useSelector, useDispatch } from 'react-redux'


function NavBar()
{
    const user=useSelector(state=>state.auth.user)
    const navigate=useNavigate()
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
        <Link>
            <AddCircle/>
            <span >Create</span>
        </Link>
        <Link to={user?'/profile':'/login'}>
            <AccountCircle/>
            <span>Profile</span>
        </Link>
    </nav>
    </>
}

export default NavBar