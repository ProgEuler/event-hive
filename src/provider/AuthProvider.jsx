import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        name: null,
        email: null,
    })
    console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const AuthData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn
    }
  return (
    <AuthContext value={AuthData}>
      {/* Your components that need access to the auth context go here */}
      {children}
    </AuthContext>
  )
}
