import MainProvider from '@/providers/MainProvider'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Montserrat, Space_Grotesk } from 'next/font/google'
import './globals.css'

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const mont = Montserrat({
	subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'vietnamese', 'latin-ext'],
	display: 'swap',
	variable: '--font-mont',
})

export const metadata: Metadata = {
	title: 'RCW108',
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
