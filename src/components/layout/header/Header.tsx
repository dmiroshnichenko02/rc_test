'use client'

import HeaderLogotype from '@/components/ui/headerLogotype/HeaderLogotype'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { FC } from 'react'
import styles from './Header.module.scss'
import Navigation from './navigation/Navigation'
import { useHeaderMenu } from './useHeaderMenu'

const Header: FC = () => {
	const { isLoading, data } = useHeaderMenu()

	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<div className={styles.wrapper}>
						<div className={styles.logotype}>
							<HeaderLogotype />
						</div>
						<div className={styles.menu}>
							{isLoading ? (
								<SkeletonLoader count={5} className='h-6 min-w-24 opacity-40' />
							) : (
								data && <Navigation menu={data.fields} />
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
