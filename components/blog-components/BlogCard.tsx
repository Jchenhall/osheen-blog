import { Post } from "@/app/utils/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const BlogCard: React.FC<Post> = ({
  title,
  author,
  coverPhoto,
  datePublished,
  id,
  slug,
}) => {
  const date1 = new Date(datePublished).toLocaleDateString();
  return (
    <motion.div
      className="p-8 col-span-6 md:col-span-2 border-2 border-border rounded-lg lg:mt-3 hover:scale-105 ease-in-out duration-500"
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link href={{ pathname: "/posts/" + slug, query: { slug: slug } }}>
        <div className="flex flex-row justify-between items-center text-center mb-4">
          <h1 className="font-bold drop-shadow-2xl lg:text-lg md:text-md text-sm">
            {title}
          </h1>
          <div
            className="lg:w-14 lg:h-14 w-10 h-10 relative"
            key={author.avatar.id}
          >
            <Image
              src={author.avatar.url}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <div className="aspect-video relative">
          <Image
            src={coverPhoto.url}
            alt={title}
            fill
            className="object-cover rounded-md  "
            sizes="100%"
          />
        </div>
      </Link>

      <div className="flex flex-row w-full items-center justify-between mt-4">
        <h3>Date Published: {date1}</h3>
        <Link href={{ pathname: "/posts/" + slug, query: { slug: slug } }}>
          <Button variant={"secondary"}>Read me</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
