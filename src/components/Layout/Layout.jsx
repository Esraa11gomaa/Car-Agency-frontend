import React from 'react'
import style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

export default function Layout() {
  return <>

  <div className="mb-28">  <Navbar /></div>

    <div className="container m-auto min-h-screen">

      <Outlet />

    </div>
    <Footer />
    
  </>
}
