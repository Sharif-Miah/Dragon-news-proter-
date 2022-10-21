import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
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

    const authInfo = { user, providerLogin, githubProviderLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;