import Link from 'next/link'
import React from 'react'

function Blog({post}) {
  return (
    <Link href={`/blogs/${post.id}`} className="border shadow-md hover:shadow-lg" key={post.id}>
        <div className="px-6 py-4">
          <h1 className="hover:underline font-bold text-left text-xl mb-2">
            {post.title}
          </h1>
        </div>
      </Link>
  )
}

export default Blog
