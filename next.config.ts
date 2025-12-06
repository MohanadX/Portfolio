import type { NextConfig } from "next";

export const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	reactCompiler: true,
};
