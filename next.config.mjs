/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		implementation: 'sass'
	},
	env: {
		APP_URL: process.env.APP_URL,
		JWT_SECRET: process.env.JWT_SECRET,
		API_URL: process.env.API_URL
	}
};

export default nextConfig;
