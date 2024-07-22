import { MAIN_URL } from '@/configs/api.config'
import MainProvider from '@/providers/MainProvider'
import { IMainData } from '@/shared/types/mainSite.interface'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Montserrat, Space_Grotesk } from 'next/font/google'
import './globals.scss'

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const mont = Montserrat({
	subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'latin-ext'],
	display: 'swap',
	variable: '--font-mont',
})

export async function generateMetadata(): Promise<Metadata> {
	const data: IMainData = await fetch(MAIN_URL, {
		cache: 'force-cache',
	}).then(res => res.json())

	return {
		title: 'RCW108',
		description: 'Web development studio',
		icons: {
			icon: [{ url: data.site_icon_url }],
			shortcut: [data.site_icon_url],
			apple: [
				{ url: data.site_icon_url },
				{ url: data.site_icon_url, sizes: '180x180', type: 'image/png' },
			],
			other: [
				{
					rel: 'apple-touch-icon-precomposed',
					url: data.site_icon_url,
				},
			],
		},
	}
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={clsx(mont.variable, space.variable)}>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
