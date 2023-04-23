import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import { useSelector } from 'react-redux';

export default function App(props) {

  const user=useSelector(state=>state.auth.user)
  return (
    <BrowserRouter>
        <Header/>
        <NavBar/>
        {
          !user?
          <PublicRoutes/>:
          <PrivateRoutes/>
        }
    </BrowserRouter>
  );
}