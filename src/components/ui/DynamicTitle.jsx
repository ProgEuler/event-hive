import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function DynamicTitle({ event }) {
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname

        if (path.startsWith('/events')) {
            document.title = event.name
        }else {
            document.title = 'Event Hive'
        }

    }, [location.pathname, event.name])
    return null
}
