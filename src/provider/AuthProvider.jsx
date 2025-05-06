import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        name: null,
        email: null,
    })
    const AuthData = {
        user,
        setUser,
    }
  return (
    <AuthContext value={AuthData}>
      {/* Your components that need access to the auth context go here */}
      {children}
    </AuthContext>
  )
}
