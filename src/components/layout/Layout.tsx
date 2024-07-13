import { IFieldMenu } from '@/shared/types/menu.interface'
import { FC } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

interface ILayout {
	children: React.ReactNode
	menu: IFieldMenu[]
}

const Layout: FC<ILayout> = ({ children, menu }) => {
	return (
		<>
			<Header menu={menu} />
			{children}
			<Footer />
		</>
	)
}

export default Layout
