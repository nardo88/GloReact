import { useEffect, useState } from 'react';

export const useDb = dataBase => {
    const [db, setDb] = useState(null); 


    useEffect(() => {
        const dbRef = dataBase.ref('goods');
        dbRef.on('value', snapshot => {
            setDb(snapshot.val());
        })
    }, [dataBase])
    return db
}
