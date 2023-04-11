import Nav from "@/components/Nav";
import React from "react";
import Comment from "@/components/Comment";

function Comments({ comments }) {
  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Comments;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
}
