import React from 'react'

const Posts = ({posts, loading}) => {
    if(loading) {
        return <h3>Loading...</h3>
    }

  return (
    <ul className='list-group mb-4'>
        {posts.map(post =>(
            <li key={post.id} className='list-group-item card card-body shadow p-2 mb-3 bg-white rounded'> <h4>{post.id}</h4> {post.title}</li>
        ))}
    </ul>
  )
}

export default Posts