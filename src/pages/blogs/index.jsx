import React from "react";
import Nav from "@/components/Nav";
import Blog from "@/components/Blog";

function index({ posts }) {
  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {posts.map((post) => {
            return <Blog key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
