import { collection } from "firebase/firestore"

export default function getFirebaseCollection(database) {
    
    return function(route) {
        const collectionRef = collection(database, route)

        return function(callback) {
            return callback(collectionRef)
        }
    }
}