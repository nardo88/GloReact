

import { useEffect, useState } from 'react';
// наш хук принимает callBack который нам вернет FireBase
export function useAuth(authFaerbase) {
    // создаем локальный state который будет в себе хранить данные о пользователе
    const [authentication, setAuthentication] = useState(null);
    // вызывая callBack мы получим объект с данными пользователя и методами обработки этих данных
    const auth = authFaerbase();
    // конструктор GoogleAuthProvider вернет нам провайдера авторизации
    // в нашем случае это будет Google
    const provider = new authFaerbase.GoogleAuthProvider();
    // создаем функцию которая будет вызывать popup окно с запросом авторизации
    const login = () => auth.signInWithPopup(provider);
    // так же функция которая будет выполнять logOut
    // эта функция возвращает промис, с помощью catch мы можем обработать ошибки
    const logOut = () => auth.signOut()
        .catch(error => console.log(error))
    // используем хук useEffect
    useEffect(() => {
        // вызываем onAuthStateChanged который принимает callBack и него 
        // передает объект с авторизованным пользователем
        auth.onAuthStateChanged(user => {
            // если user есть
            if (user){
                // то записываем его в state
                setAuthentication(user)
            } else {
                // иначе в state записываем null
                setAuthentication(null)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authentication])

    return { authentication, login, logOut };
}

