import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfVc8s68RI11jIFG-SysHSJT7tV7cKpwM",
  authDomain: "ksshop-4aff0.firebaseapp.com",
  projectId: "ksshop-4aff0",
  storageBucket: "ksshop-4aff0.appspot.com",
  messagingSenderId: "304642828447",
  appId: "1:304642828447:web:a5b655662131fe4438daaa",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

export { db }
