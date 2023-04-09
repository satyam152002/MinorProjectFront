import {  AccountCircle,  AddCircle,   HomeWork ,Restaurant} from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar()
{
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
        <Link to={"/profile"}>
            <AccountCircle/>
            <span>Profile</span>
        </Link>
    </nav>
    </>
}

export default NavBar