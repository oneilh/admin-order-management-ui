import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */

	// This allows us to load images from Cloudinary in our app, which is where we host product images for single buys
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com",
            },

        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/login",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
