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
};
// https:/media.graphassets.com/TsaPx3QgTSWO4CsmTgWA
export default nextConfig;
