import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (

    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-blue-900 to-purple-900 px-8 lg:px-16 text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gradient-to-r from-blue-900 to-purple-900 rounded-box z-1 mt-3 w-24 p-2 shadow">


                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
            </div>
            <div className="btn btn-ghost text-xl">Event Hive</div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
        </div>
        <div className="navbar-end gap-4">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    </div>
  )
}
