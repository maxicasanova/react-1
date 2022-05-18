import { getDocs } from 'firebase/firestore';

const buscarFirebase = (colec, setNumber, setLoading, isActive) =>{
    getDocs(colec)
        .then((res) =>{
            if (res.size === 0) {
                console.log('No Results')
            } else if (isActive){
                setNumber(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
            }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
}

export default buscarFirebase;