/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tsxahtkeyrqzjaxknwne.supabase.co",
        pathname: "/storage/v1/object/public/photos/**",
          port: ""
      },
    ],
  },

 experimental: {
    serverActions: {
      bodySizeLimit: '20mb' 
    }
  }
};

export default nextConfig;
