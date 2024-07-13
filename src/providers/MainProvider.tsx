'use client'

import Layout from '@/components/layout/Layout'
import { IFieldMenu } from '@/shared/types/menu.interface'
import { FC } from 'react'

interface IMainProvider {
	menu: IFieldMenu[]
	children: React.ReactNode
}

const MainProvider: FC<IMainProvider> = ({ children, menu }) => {
	return <Layout menu={menu}>{children}</Layout>
}

export default MainProvider
