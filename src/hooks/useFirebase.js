import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
        const [user, setUser] = useState({});
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [isLogin, setIsLogin] = useState(false);
        const [error, setError] = useState('');

        const [isLoading, setIsLoading] = useState(true);

        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();

        const signInWithGoogle = () => {
                setIsLoading(true);
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user);
                                console.log(result.user)
                        })
                        .finally(() => { setIsLoading(false) })
        };

        // Observe User State Change:
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user);
                        }
                        else {
                                setUser({});
                        }
                        setIsLoading(false);
                })
                return unsubscribe;
        }, [])


        // Handle Registration Name:
        const handleName = e => {
                setName(e.target.value);
        }

        // Handle Registration Email:
        const handleEmail = e => {
                setEmail(e.target.value);
        }

        // Handle Registration Password:
        const handlePassword = e => {
                setPassword(e.target.value);
        }
        // Handle Registration:
        const toggleLogin = e => {
                setIsLogin(e.target.checked);
        }
        const signUp = e => {
                e.preventDefault();
                if (password.length < 6) {
                        setError("Password Must be atleast 6 character");
                        return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        setError("Please Type Valid Email");
                        return;
                }
                isLogin ? login(email, password) : createUser(email, password);
        }

        // Set User Name:
        const setUserName = () => {
                updateProfile(auth.currentUser, {
                        displayName: name
                })
                        .then(result => { })
        }

        // Login:
        const login = (email, password) => {
                signInWithEmailAndPassword(auth, email, password)
                        .then((result) => {
                                // Signed in 
                                setUser(result.user);
                                console.log(result.user);
                                // ...
                        })
                        .catch((error) => {
                                setError(error.message);
                        });
        }

        // Create New User:
        const createUser = (email, password) => {
                createUserWithEmailAndPassword(auth, email, password)
                        .then(result => {
                                setUser(result.user);
                                console.log(result.user);
                                setError()
                                setUserName();
                                alert("Successfully Create Account");
                        })
                        .catch((error) => {
                                setError(error.message);
                                return;
                        });
        }

        // Log Out:
        const logOut = () => {
                setIsLoading(true);
                signOut(auth)
                        .then(() => {
                                setUser({});
                        })
                        .finally(() => setIsLoading(false));
        }

        return {
                user,
                isLoading,
                signInWithGoogle,
                handleName,
                handleEmail,
                handlePassword,
                signUp,
                logOut, error, isLogin, toggleLogin, isLoading
        }
}

export default useFirebase;