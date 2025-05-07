import React, { use } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { LogIn, LogOut } from 'lucide-react'
import { AuthContext } from '../provider/AuthProvider'

export default function Navbar() {
    const { user, logOut } = use(AuthContext)

    const navigate = useNavigate()

    const handleLogout = () =>{
        console.log("logging out")
        logOut()
            .then(() => {
                console.log("logged out")
            })
            .catch((error) => {
                console.error("Error logging out:", error)
            })
    }
    console.log(user)
  return (

    <div className="navbar absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white/80 px-4 lg:px-16">
        <div className="navbar-start">
            {/* <div>{user && user.displayName}</div> */}
            <div className="dropdown">
            <div tabIndex={0} role="button" className="pl-2 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gradient-to-r from-blue-900 to-purple-900 rounded-box z-1 mt-3 w-23 p-2 shadow">


                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/EventsBookings">Events</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
            </div>
            <button
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors font-semibold text-2xl"
            >
                Event Hive
            </button>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/EventsBookings">Events</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
        </div>
        <div className="navbar-end lg:gap-1">
            {
                user ?
                (<>
                    <button
                        onClick={() => navigate('/profile')}
                        className="flex items-center gap-1 rounded-lg">
                        <img src={user.photoURL} alt="User"
                        className="size-9 rounded-full overflow-hidden border-3 border-purple-500" />
                        <span className="hidden lg:block">{user.displayName}</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="hover:bg-white/10 transition-colors flex items-center gap-1 px-4 py-2 rounded-lg font-semibold">
                        <LogOut className="w-5 h-5" /> Logout
                    </button>
                </>)

                : ( <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                )
            }

        </div>
    </div>
  )
}
