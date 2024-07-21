import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'

export const DynamicHeader = dynamic(() => import('./header/Header'), {})

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<DynamicHeader />
			{children}
			<Footer />
		</>
	)
}

export default Layout
