import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function BlogDetails() {
  const { query } = useRouter()
  return (
    <div className='container mx-auto'>
      <h1>Blog details {query.blogId}</h1>
      <Link className='bg-green-500 px-2 py-1 rounded-lg ' href='/blogs'>Go back to blog listing</Link>
    </div>
  )
}

export default BlogDetails

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }
