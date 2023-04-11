import Link from "next/link";
import React from "react";

function Comment({ comment }) {
  return (
    <Link
      href={`/comments/${comment.id}`}
      className="border shadow-md hover:shadow-lg"
      key={comment.id}
    >
      <div className="px-6 py-4">
        <h1 className="hover:underline font-bold text-left text-xl mb-2">
          {comment.name}
        </h1>
        <p>{`User email: ${comment.email}`}</p>
      </div>
    </Link>
  );
}

export default Comment;
