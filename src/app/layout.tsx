import { getMenuUrl } from '@/configs/api.config'
import { IFieldMenu, IMenu } from '@/shared/types/menu.interface'
import { clearMenuUrl } from '@/utils/clearMenuUrl'
import clsx from 'clsx'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
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

export const fetchMenuData = async () => {
	try {
		const data: IMenu[] = await fetch(getMenuUrl, { cache: 'no-store' }).then(
			res => res.json()
		)

		const menu: IFieldMenu[] = data[0].fields.map(menu => ({
			title: menu.title,
			url: clearMenuUrl(menu.url),
		}))

		return menu
	} catch (errors) {
		console.log(errors)

		return []
	}
}

export const DynamicMainProvider = dynamic(
	() => import('@/providers/MainProvider'),
	{}
)

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const menu = await fetchMenuData()

	return (
		<html lang='en'>
			<body className={clsx(mont.variable, space.variable)}>
				{menu && (
					<DynamicMainProvider menu={menu}>{children}</DynamicMainProvider>
				)}
			</body>
		</html>
	)
}
