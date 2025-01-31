import Layout from '@/components/layout/Layout'
import { FC, PropsWithChildren } from 'react'
import ReactQueryProvider from './ReactQueryProviders'

const MainProvider: FC<PropsWithChildren> = async ({ children }) => {
	return (
		<>
			<ReactQueryProvider>
				<Layout>{children}</Layout>
			</ReactQueryProvider>
		</>
	)
}

export default MainProvider
