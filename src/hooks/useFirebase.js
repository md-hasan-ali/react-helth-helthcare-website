// adding necessary file 
import initializeFirebase from '../firebase/firebaseInitialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
initializeFirebase();

// useFirebase Hook
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const users = result.user;
                setUser(users)
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    const createAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    const changeProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: { name },
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    }
    const loginAccount = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        })
            .catch((error) => {
                setError(error.message)
            })
    }

    return {
        googleSignIn, user, createAccount, loginAccount, error, changeProfile, logOut
    }

};

export default useFirebase;