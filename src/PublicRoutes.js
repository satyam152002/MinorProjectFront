import { Routes,Route} from "react-router-dom";
import Hostel from "./pages/Hostel/Hostel";
import Tiffin from "./pages/Tiffin/Tiffin";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function PublicRoutes()
{
    return<>
    <Routes>
        <Route path='/' element={<Hostel/>}/>
        <Route path='/tiffin' element={<Tiffin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Login/>}/>
    </Routes>
    </>
}
export default PublicRoutes
