import Link from 'next/link'
import React from 'react'

function Blog({post}) {
  return (
    <div className="border shadow-md" key={post.id}>
        <div className="px-6 py-4">
          <Link href={`/blogs/${post.id}`}  className="hover:underline font-bold text-left text-xl mb-2">
            {post.title}
          </Link>
        </div>
      </div>
  )
}

export default Blog
