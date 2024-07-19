import { addDoc, collection } from "firebase/firestore"
import { db } from "../config"

export default async function addFirebaseDoc(collectionRoute, docObj) {
    const collectionRef = collection(db, collectionRoute)

    await addDoc(collectionRef, docObj)
}