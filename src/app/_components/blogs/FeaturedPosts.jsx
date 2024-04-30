import { sortBlogs } from "../../utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">Featured Posts</h2>

      {/* Adjust the grid to have one large column on the left and two smaller rows on the right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 sm:mt-16">
        {/* BlogLayoutOne on the left, spanning the full height */}
        <article className="relative col-span-1 sm:col-span-1">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>

        {/* Two BlogLayoutTwo components on the right, stacked vertically */}
        <div className="flex flex-col gap-6">
          <article className="relative">
            <BlogLayoutTwo blog={sortedBlogs[2]} />
          </article>
          <article className="relative">
            <BlogLayoutTwo blog={sortedBlogs[3]} />
          </article>
        </div>
      </div>
    </section>
  );
};


export default FeaturedPosts;
