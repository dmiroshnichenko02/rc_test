'use client'

import HeaderLogotype from '@/components/ui/headerLogotype/HeaderLogotype'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { useScreenDetector } from '@/hooks/useScreenDetector'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { FC, useRef, useState } from 'react'
import styles from './Header.module.scss'
import Navigation from './navigation/Navigation'
import { useHeaderMenu } from './useHeaderMenu'

const Header: FC = () => {
	const { isLoading, data } = useHeaderMenu()

	const [isHidden, setIsHidden] = useState(false)
	const { scrollY } = useScroll()
	const lastYRef = useRef(0)

	useMotionValueEvent(scrollY, 'change', y => {
		const difference = y - lastYRef.current
		if (Math.abs(difference) > 50) {
			setIsHidden(difference > 0)

			lastYRef.current = y
		}
	})

	const { isMobile } = useScreenDetector()

	return (
		<>
			<motion.header
				whileHover='visible'
				animate={isHidden ? 'hidden' : 'visible'}
				variants={{
					hidden: { y: '-100%' },
					visible: {
						y: '0%',
					},
				}}
				transition={{ duration: 0.2 }}
				className={styles.header}
			>
				<div className='container'>
					<div className={styles.wrapper}>
						<div className={styles.logotype}>
							<HeaderLogotype />
						</div>
						<div className={styles.menu}>
							{isLoading ? (
								isMobile ? (
									<SkeletonLoader
										count={1}
										className='h-6 min-w-24 opacity-40'
									/>
								) : (
									<SkeletonLoader
										count={5}
										className='h-6 min-w-24 opacity-40'
									/>
								)
							) : (
								data && <Navigation menu={data.fields} />
							)}
						</div>
					</div>
				</div>
			</motion.header>
		</>
	)
}

export default Header
