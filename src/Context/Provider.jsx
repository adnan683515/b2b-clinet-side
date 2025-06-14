import React, { useEffect, useState } from 'react';
import { Authcontext } from './AuthContext';
import { auth } from './../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { Turtle } from 'lucide-react';

const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (obj) => {
        setLoading(true)
        return updateProfile(auth.currentUser, obj)
    }

    useEffect(() => {
        const suscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return (() => {
            suscribe()
        })
    }, [])

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const gooleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }




   


    const info = {
        register,
        user,
        setUser,
        loading,
        login,
        logout,
        updateUser,
        gooleLogin,
    
    }


    return (
        <Authcontext value={info}>
            {children}
        </Authcontext>
    );
};

export default Provider;