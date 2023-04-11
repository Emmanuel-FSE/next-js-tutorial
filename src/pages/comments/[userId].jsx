import Nav from "@/components/Nav";
import React from "react";

function Comment({ comments }) {
  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {comments.map((comment) => {
            return (
              <div
                href={`/comments/${comment.id}`}
                className="border shadow-md hover:shadow-lg"
                key={comment.id}
              >
                <div className="px-6 py-4">
                  <h1 className="hover:underline font-bold text-left text-xl mb-2">
                    {comment.name}
                  </h1>
                  <p className="text-xl">{`User email: ${comment.email}`}</p>
                  <p>{comment.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.userId}`
  );
  const data = await res.json();
  return {
    props: {
      comments: data,
      userId: params.userId,
    },
  };
}
