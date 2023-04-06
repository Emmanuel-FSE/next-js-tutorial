import React from "react";
import Nav from "@/components/Nav";

function index() {
  return (
    <div>
      <Nav />
      <section className="container mx-auto space-y-3">
        <h1 className="text-center text-2xl underline font-bold font-sans">
          Emmax Blogs
        </h1>
        <p>
          Note the addition of the getStaticPaths function that returns an array
          of possible values for the blogId parameter, which is necessary for
          Next.js to pre-render all the pages at build time.
        </p>
        <p>
          The useRouter hook should not be used in the getStaticProps function
          because it is a server-side function and useRouter is a client-side
          hook. To get the dynamic route parameter in getStaticProps, you can
          use context.params.
        </p>
      </section>
    </div>
  );
}

export default index;
