import { useEffect, useState } from 'react';

export function useAuth(authFaerbase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFaerbase();
    const provider = new authFaerbase.GoogleAuthProvider();

    const login = () => auth.signInWithPopup(provider);

    const logOut = () => auth.signOut()
        .catch(error => console.log(error))

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
                setAuthentication(user)
            } else {
                setAuthentication(null)
            }
        })
    }, [authentication])

    return { authentication, login, logOut };
}