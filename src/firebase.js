import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.EXPO_FIREBASE_APIKEY,
  authDomain: "blog-8877.firebaseapp.com",
  databaseURL: "https://blog-8877.firebaseio.com",
  projectId: "blog-8877",
  storageBucket: "blog-8877.appspot.com",
  messagingSenderId: "392305382704",
  appId: "1:392305382704:web:8448e01cdfc17d01bae4f5",
  measurementId: "G-T7WS3V9LSJ",
}

//initialize firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

//return the user information with provided uid
export const getUserDocument = async (uid) => {
  if (!uid) return null
  try {
    return await firestore.collection("users").doc(uid)
  } catch (error) {
    console.error("error fetching user", error.message)
  }
}

//added the user to database with additionalData(displayName, etc)
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const {
      displayName,
      email,
      photoURL,
      metadata: { lastSignInTime },
    } = user

    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        lastSignInTime,
        ...additionalData,
      })
    } catch (error) {
      console.error("error creating user", error.message)
    }
  }

  return getUserDocument(user.uid)
}
