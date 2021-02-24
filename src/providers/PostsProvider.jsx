import React, { useState, useEffect, createContext } from "react"
import { firestore } from "../firebase"

export const postsContext = createContext()

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const docsWithId = (doc) => {
    return { id: doc.id, ...doc.data() }
  }

  useEffect(() => {
    const unsubsribe = firestore.collection("posts").onSnapshot((snapShot) => {
      const post = snapShot.docs.map(docsWithId).reverse()
      setPosts(post)
    })
    return () => unsubsribe()
  }, [])

  return <postsContext.Provider value={posts}>{children}</postsContext.Provider>
}

export default PostsProvider
