import Link from "next/link";
import React from "react";

function Blog({ post }) {
  return (
    <div className="border shadow-md hover:shadow-lg relative" key={post.id}>
      <Link href={`/blogs/${post.id}`} className="px-6 py-4">
        <h1 className="hover:underline font-bold text-left text-xl mb-2 pl-2">
          {post.title}
        </h1>
      </Link>
      <Link
        href={`/comments/${post.id}`}
        className="absolute bottom-0 right-0 bg-black hover:text-blue-700 text-slate-200 font-serif shadow-md text-bold px-2 py-1 m-1 rounded-sm"
      >
        Comments
      </Link>
    </div>
  );
}

export default Blog;
