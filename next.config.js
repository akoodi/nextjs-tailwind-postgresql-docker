/** @type {import('next').NextConfig} */

const { version } = require("./package.json");

const nextConfig = {
	//output: "export",
	//output: "standalone",
	reactStrictMode: true,
	//distDir: 'dist',
	//assetPrefix: "http://"
	webpack: (config, context) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		config.resolve.fallback = {
			fs: false,
		};
		return config;
	},
	publicRuntimeConfig: {
		version,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
