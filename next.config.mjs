// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["res.cloudinary.com"]
//     }
// };

// export default nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '"res.cloudinary.com"',
        pathname: '/**', // allow all paths
      },
    ],
  },
};

// module.exports = nextConfig;
export default nextConfig;

