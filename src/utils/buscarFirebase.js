import { getDocs } from 'firebase/firestore';

const buscarFirebase = (colec, setNumber) =>{
    getDocs(colec)
        .then((res) =>{
            if (res.size === 0) {
                console.log('No Results')
            }
            setNumber(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
        })
}

export default buscarFirebase;