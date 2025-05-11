import React from 'react'
import { Outlet } from 'react-router'
import './index.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { ToastProvider } from './components/ui/ToastProvider'
import { Analytics } from "@vercel/analytics/next"

export default function Root() {
  return (
    <div>
        <Analytics />
        <Navbar />
        <ToastProvider>
            <Outlet />
        </ToastProvider>
        <Footer />
    </div>
  )
}
