import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="bg-black text-white text-2xl p-4 flex justify-around">
      <Link className="hover:underline" href="/">
        Home
      </Link>

      <Link className="hover:underline" href="/blogs">
        Blogs
      </Link>
    </div>
  );
}

export default Nav;
