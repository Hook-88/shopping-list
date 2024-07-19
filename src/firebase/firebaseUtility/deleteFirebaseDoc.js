import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config";

export default async function deleteFirebaseDoc(collectionRoute, docId) {
    
    const docRef = doc(db, collectionRoute, docId)

    await deleteDoc(docRef)
}