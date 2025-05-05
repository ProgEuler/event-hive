import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Events from '../pages/EventDetails'
import Root from '../Root'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import EventsBook from '../pages/EventsBook'
import EventDetails from '../pages/EventDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/upcomingEvents.json'),
                hydrateFallbackElement: <div className='flex justify-center items-center h-screen'>
                    <svg className="animate-spin h-10 w-10 text-blue-500" viewBox="3 3 18 18">
                        <circle className="opacity-25" cx="12" cy="12" r="9" strokeWidth="2" fill="none" />
                        <path className="opacity-75" fill="blue" d="M12 3v6h6a9 9 0 1 1-9-9z" />
                    </svg>
                </div>,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/Events/:id',
                element: <Events />,
                loader: () => fetch('/upcomingEvents.json'),
                hydrateFallbackElement: <div className='flex justify-center items-center h-screen'>
                    <svg className="animate-spin h-10 w-10 text-blue-500" viewBox="3 3 18 18">
                        <circle className="opacity-25" cx="12" cy="12" r="9" strokeWidth="2" fill="none" />
                        <path className="opacity-75" fill="blue" d="M12 3v6h6a9 9 0 1 1-9-9z" />
                    </svg>
                </div>,
            },
            {
                path: '/EventsBookings',
                element: <EventsBook />,
                loader: () => fetch('/upcomingEvents.json'),
                hydrateFallbackElement: <div className='flex justify-center items-center h-screen'>
                    <svg className="animate-spin h-10 w-10 text-blue-500" viewBox="3 3 18 18">
                        <circle className="opacity-25" cx="12" cy="12" r="9" strokeWidth="2" fill="none" />
                        <path className="opacity-75" fill="blue" d="M12 3v6h6a9 9 0 1 1-9-9z" />
                    </svg>
                </div>,
            },
            {
                path: '/events/:id',
                element: <EventDetails />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ],

    },
    // {
    //     path: '*',
    //     element: <div>404 Not Found</div>
    // }
])
