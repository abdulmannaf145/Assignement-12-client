import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentaction from "../../firebase/firebase.init";

initializeAuthentaction();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
            
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const emailPasswordSignIn = () => {
        createUserWithEmailAndPassword(auth,)
            .then()
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, []);
    return {
        googleSignIn,
        user,
        error,
        logOut
    }
}

export default useFirebase;