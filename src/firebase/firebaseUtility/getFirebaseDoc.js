import { doc } from "firebase/firestore"

export default function getFirebaseDoc(database) {
    
    return function(route) {

        return function(itemId) {
            const docRef = doc(database, route, itemId)

            return function (callback) {
                callback(docRef)
            }
        }
    }
}