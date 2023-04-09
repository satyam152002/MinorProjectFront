import { Routes,Route } from "react-router-dom";
import Hostel from "./pages/Hostel/Hostel";
import Tiffin from "./pages/Tiffin/Tiffin";
import Profile from './pages/Profile/Profile'

function PrivateRoutes()
{
    return<>
    <Routes>
        <Route path='/' element={<Hostel/>}/>
        <Route path='/tiffin' element={<Tiffin/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<h1 className="text-center">404 Page Not Found</h1>}/>
    </Routes>
    </>
}

export default PrivateRoutes