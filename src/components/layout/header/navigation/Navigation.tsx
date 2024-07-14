'use client'

import { IFieldMenu } from '@/shared/types/menu.interface'
import { clearMenuUrl } from '@/utils/clearMenuUrl'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Navigation.module.scss'
interface INavigation {
	menu: IFieldMenu[]
}

const Navigation: FC<INavigation> = ({ menu }) => {
	const pathname = usePathname()

	return (
		<nav className={styles.nav}>
			<ul className={styles.menu}>
				{menu.length > 0 &&
					menu.map((item, index) => (
						<li
							key={index}
							className={clsx(styles.menuItem, {
								[styles.active]: pathname === clearMenuUrl(item.url),
							})}
						>
							<Link href={clearMenuUrl(item.url)}>{item.title}</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}

export default Navigation
