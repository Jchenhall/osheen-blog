import React from "react";

import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";

const endpoint =
  "https://api-eu-west-2.hygraph.com/v2/cltcw9pck3hcq07uz839txy35/master";
const graphQLClient = new GraphQLClient(endpoint);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        html
        raw
        markdown
        text
      }
      author {
        name
        avatar {
          id
          url
        }
      }
      coverPhoto {
        createdBy {
          id
        }
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphQLClient.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await graphQLClient.request(QUERY, { slug });
  const post = data.post;
  const date1 = new Date(post.datePublished).toLocaleDateString();

  return (
    <main className="w-full max-h-full flex flex-col justify-center items-center mt-16 sm:mt-20 md:mt-24 ">
      <h1 className="text-3xl pb-4 font-bold">{post.title}</h1>
      <h1 className="text-lg pb-4">
        {post.author.name}: {date1}
      </h1>
      <div className=" w-[90%] max-h-96 overflow-hidden rounded-md flex justify-center items-center">
        <Image
          src={post.coverPhoto.url}
          alt={post.title}
          width={800}
          height={300}
          className="object-contain rounded-md w-full flex justify-center items-center"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content.html }}
        className=" flex flex-col relative h-full m-10 justify-center items-start [&>p]:p-2"
      />
    </main>
  );
}
