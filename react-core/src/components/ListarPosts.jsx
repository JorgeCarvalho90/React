import { useState, useEffect } from "react"

const URL = "https://jsonplaceholder.typicode.com/posts"

export default function ListarPosts (){
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(URL)
        .then((resp) => resp.json())
        .then((data) => {setPosts(data)
          setIsLoading(false)
        })
    }, [])

    if (isLoading){
      return <h1>Loading...</h1>
    }
    
    return(
        <>
        <h1>Posts</h1>
        <div>
        {posts.map((post, key) => (
          <div key={`post-${post.id}-${key}`}>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
        </div>
        </>
    )
}