import { addDoc, collection } from "firebase/firestore"
import { db } from "../config"

export default async function addFirebaseDoc(collectionRoute, docObj) {
    const collectionRef = collection(db, collectionRoute)

    try {
        const newDocRef = await addDoc(collectionRef, docObj)

        if (!newDocRef.id) {
            throw new Error("Could not create document")
        }


    } catch(error) {
        console.error(error)
    }

}