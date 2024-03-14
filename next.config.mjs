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
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
      "/blog/nextjs/comment/1": { page: "/blog/[post]/comment/[id]" }, // correct
    };
  },
};
// https:/media.graphassets.com/TsaPx3QgTSWO4CsmTgWA
export default nextConfig;
