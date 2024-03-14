/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
      },
    ],
  },
  generateStaticParams: function () {
    return {
      "/": { page: "/" },
      // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
      "/blog/nextjs/comment/1": { page: "/blog/[post]/comment/[id]" }, // correct
    };
  },
};
export default nextConfig;
