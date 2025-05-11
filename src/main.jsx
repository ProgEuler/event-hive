import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import AuthProvider from './provider/AuthProvider'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
