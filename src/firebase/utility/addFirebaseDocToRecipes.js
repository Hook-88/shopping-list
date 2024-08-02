import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"

export default async function addFirebaseDocToRecipes(newItemObj) {
    const collectionRef = collection(db, "recipes")

    await addDoc(collectionRef, newItemObj)
}