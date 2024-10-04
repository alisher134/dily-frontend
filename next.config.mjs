/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		implementation: 'sass-embedded'
	},
	env: {
		APP_URL: process.env.APP_URL,
		API_URL: process.env.API_URL
	}
};

export default nextConfig;
