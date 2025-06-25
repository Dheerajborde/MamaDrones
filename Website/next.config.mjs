/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',  // Optional: specify the protocol (https://)
          hostname:  'res.cloudinary.com', // Specify the hostname
          // You can also specify other parts like pathname or port if necessary
        },
      ],
    },
  };
  
  export default nextConfig;
  