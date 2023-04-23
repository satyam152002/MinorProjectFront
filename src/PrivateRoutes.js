import { Routes,Route } from "react-router-dom";
import Hostel from "./pages/Hostel/Hostel";
import Tiffin from "./pages/Tiffin/Tiffin";
import Profile from './pages/Profile/Profile'
import CreateTiffin from "./pages/Create/CreateTiffin";
import CreateHostel from "./pages/Create/CreateHostel";

function PrivateRoutes()
{
    return<>
    <Routes>
        <Route path='/' element={<Hostel/>}/>
        <Route path='/hostel' element={<Hostel/>}/>
        <Route path='/hostel/create' element={<CreateHostel/>}/>

        <Route path='/tiffin' element={<Tiffin/>}/>
        <Route path='/tiffin/create' element={<CreateTiffin/>}/>

        <Route path='/profile' element={<Profile/>}/>
        
        <Route path='*' element={<h1 className="text-center">404 Page Not Found</h1>}/>
    </Routes>
    </>
}

export default PrivateRoutes