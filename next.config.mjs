/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'rcw108.com',
				port: '',
				pathname: '/dev/wp-content/uploads/**',
			},
		],
	},
}

export default nextConfig
