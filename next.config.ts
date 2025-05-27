const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: isProd ? "export" : "standalone",
  trailingSlash: true,
  basePath: "/notifications-page",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;