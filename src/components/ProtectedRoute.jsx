import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';

const auth = getAuth();

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);

    const getUsers = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;

                console.log("user", user);
                setUser(user)
                // ...
            } else {
                // User is signed out
                // ...
                setUser(null)
            }
        })
    };
    useEffect(() => {
        getUsers()

        return () => getUsers()
    }, [])
    if (user) {
        <Navigate to='/' />
        return children
    } else {
        return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute
