import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyCeHd-qq88i8UZ8wS_YoZ7qo2luHsmFheo',
  authDomain: 'decide4me-c2243.firebaseapp.com',
  projectId: 'decide4me-c2243',
  storageBucket: 'decide4me-c2243.firebasestorage.app',
  messagingSenderId: '356006259262',
  appId: '1:356006259262:web:b7f5cc2f43d9bb7ea4ff6f',
  measurementId: 'G-Z8RJP3B7B5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
