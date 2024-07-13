import { getMenuUrl } from '@/configs/api.config'
import { IFieldMenu, IMenu } from '@/shared/types/menu.interface'
import { clearMenuUrl } from '@/utils/clearMenuUrl'
import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

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

export const DynamicLayout = dynamic(
	() => import('@/components/layout/Layout'),
	{}
)

const MainProvider: FC<PropsWithChildren> = async ({ children }) => {
	const menuData = await fetchMenuData()

	return <DynamicLayout menu={menuData}>{children}</DynamicLayout>
}

export default MainProvider
