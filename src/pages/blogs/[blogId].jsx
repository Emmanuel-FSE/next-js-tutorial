import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

function BlogDetails({ post }) {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl underline mt-4">{post.title}</h1>
        <p className="mt-6 border shadow-md p-4">{post.body}</p>
        <Link
          className="bg-black text-slate-200 font-serif shadow-md text-bold px-2 py-1 rounded-sm fixed bottom-0 right-0 m-4"
          href="/blogs"
        >
          {`<< Go back to blog listing`}
        </Link>

        <div className="mt-4">
          <Link
            href={`/comments/${post.id}`}
            className="bg-black hover:text-blue-700 text-slate-200 font-serif shadow-md text-bold px-5 py-2 rounded-sm"
          >
            Comments
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { blogId: `${post.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
