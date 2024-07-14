/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		NEXT_PUBLIC_WP_URL: process.env.REACT_APP_URL,
	},
}

export default nextConfig
