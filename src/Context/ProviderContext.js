import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubProviderLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const registerInProvider = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInProvider = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = { user, providerLogin, githubProviderLogin, logOut, registerInProvider, logInProvider }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;