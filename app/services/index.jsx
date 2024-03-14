import { GraphQLClient, gql } from "graphql-request";

const endpoint =
  "https://api-eu-west-2.hygraph.com/v2/cltcw9pck3hcq07uz839txy35/master";
const graphQLClient = new GraphQLClient(endpoint);

export const getAllPosts = async () => {
  const query = gql`
    query Posts {
      posts {
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
  const response = await graphQLClient.request(query);
  return response.posts;
};

//needs work bellow

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        html
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

export const getStaticPaths = async () => {
  const { posts } = await graphQLClient.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({}) => {
  const data = await graphQLClient.request(QUERY, data.post.slug);
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
