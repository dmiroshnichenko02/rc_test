'use client'

import { useScreenDetector } from '@/hooks/useScreenDetector'
import { IFieldMenu } from '@/shared/types/menu.interface'
import { clearMenuUrl } from '@/utils/clearMenuUrl'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import styles from './Navigation.module.scss'
import Burger from './burger/Burger'
interface INavigation {
	menu: IFieldMenu[]
}

const Navigation: FC<INavigation> = ({ menu }) => {
	const pathname = usePathname()

	const { isMobile, isTablet } = useScreenDetector()

	const [open, setOpen] = useState(false)
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
	}, [open])

	const handleNoDesktopClick = () => {
		if (isTablet || isMobile) {
			setOpen(!open)
		}
	}

	return (
		<>
			<nav className={styles.nav}>
				<ul className={clsx(styles.menu, { [styles.open]: open })}>
					{menu.length > 0 &&
						menu.map((item, index) => {
							const itemUrl = clearMenuUrl(item.url)
							const isActive =
								(itemUrl === '/' && pathname === '/') ||
								(itemUrl !== '/' && pathname.includes(itemUrl))
							return (
								<li
									key={index}
									className={clsx(styles.menuItem, {
										[styles.active]: isActive,
									})}
									onClick={handleNoDesktopClick}
								>
									<Link href={itemUrl}>{item.title}</Link>
								</li>
							)
						})}
				</ul>
				<div className={styles.burger}>
					<Burger open={open} setOpen={setOpen} />
				</div>
			</nav>
		</>
	)
}

export default Navigation
