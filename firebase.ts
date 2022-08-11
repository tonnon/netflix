// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMPBlR_ezB8J--S3nLtKCvwfi2qO_X0JA",
    authDomain: "netflix-93243.firebaseapp.com",
    projectId: "netflix-93243",
    storageBucket: "netflix-93243.appspot.com",
    messagingSenderId: "1076863085478",
    appId: "1:1076863085478:web:e01205fb2fb4d75364bd67",
    measurementId: "G-01G04T3ZC1"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }