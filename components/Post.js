import { useEffect, useState } from 'react'
import styles from '../styles/Post.module.css'
import * as service from '../services/posts.service'

const Post = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.find().then((posts) => {
      setPosts(posts)
    })
  }, [])

  return posts.map((post, index) => {
    return (
      <div key={index} className={styles.post}>
        {post.title}
      </div>
    )
  })
}

export default Post
