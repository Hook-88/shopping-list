// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU0JyGWnMDkVQeoveBZ_Td2u8dj6x4Ic4",
  authDomain: "shopping-list-ddfb5.firebaseapp.com",
  projectId: "shopping-list-ddfb5",
  storageBucket: "shopping-list-ddfb5.appspot.com",
  messagingSenderId: "881841936438",
  appId: "1:881841936438:web:370b6138b57aac57f92097"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)