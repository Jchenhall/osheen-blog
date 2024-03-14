"use client";
import { useState, useEffect } from "react";
import { getAllPosts } from "@/app/services/index";
import BlogCard from "@/components/blog-components/BlogCard";
import { Post } from "@/app/utils/types";
import Navbar from "@/components/navbar-components/navbar/Navbar";

export default function Blog() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    getPostData();
  }, []);

  const getPostData = async () => {
    const res = await getAllPosts();
    setData(res);
    return;
  };

  return (
    <main className=" w-full h-full">
      <Navbar />
      <div className="lg:m-24 m-6 mt-24 rounded-md grid grid-cols-6 gap-12  w-100">
        <>
          {data.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
              coverPhoto={post.coverPhoto}
              id={post.id}
              slug={post.slug}
              updatedAt={post.updatedAt}
              datePublished={post.datePublished}
            />
          ))}
        </>
      </div>
    </main>
  );
}
