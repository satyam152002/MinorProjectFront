import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

export default function App(props) {
const user=true
  return (
    <BrowserRouter>
        <Header/>
        <NavBar/>
        {
          user?
          <PublicRoutes/>:
          <PrivateRoutes/>
        }
    </BrowserRouter>
  );
}