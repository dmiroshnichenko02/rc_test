/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL_PAGES: process.env.REACT_APP_URL,
	},
}

export default nextConfig
