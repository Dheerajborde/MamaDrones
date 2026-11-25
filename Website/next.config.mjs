const tractorHost = [{ type: "host", value: "pehelwan\\.live" }];

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        { source: "/:path*", has: [{ type: "host", value: "www\\.pehelwan\\.live" }], destination: "https://pehelwan.live/:path*", permanent: true },
        { source: "/pehelwan-site/en", destination: "https://pehelwan.live/", permanent: true },
        { source: "/pehelwan-site/mr", destination: "https://pehelwan.live/marathi", permanent: true },
        { source: "/electric-tractor", has: tractorHost, destination: "/", permanent: true },
        { source: "/marathi/electric-tractor", has: tractorHost, destination: "/marathi", permanent: true },
        // Only the two product pages belong to Pehelwan. Media and Next assets stay local.
        { source: "/:path((?!_next/|.*\\.|marathi$).+)", has: tractorHost, destination: "https://www.mamaapp.live/:path", permanent: false },
      ];
    },
    async rewrites() {
      // The MAMA homepage and metadata routes already exist, so match before the filesystem.
      return { beforeFiles: [
        { source: "/", has: tractorHost, destination: "/pehelwan-site/en" },
        { source: "/marathi", has: tractorHost, destination: "/pehelwan-site/mr" },
        { source: "/robots.txt", has: tractorHost, destination: "/pehelwan-meta/robots.txt" },
        { source: "/sitemap.xml", has: tractorHost, destination: "/pehelwan-meta/sitemap.xml" },
      ], afterFiles: [], fallback: [] };
    },
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
