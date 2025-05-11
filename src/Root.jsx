import React from 'react'
import { Outlet } from 'react-router'
import './index.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { ToastProvider } from './components/ui/ToastProvider'

export default function Root() {
  return (
    <div>
        <Navbar />
        <ToastProvider>
            <Outlet />
        </ToastProvider>
        <Footer />
    </div>
  )
}
