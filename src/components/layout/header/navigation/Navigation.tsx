import { IFieldMenu } from '@/shared/types/menu.interface'
import { clearMenuUrl } from '@/utils/clearMenuUrl'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Navigation.module.scss'
interface INavigation {
	menu: IFieldMenu[]
}

const Navigation: FC<INavigation> = ({ menu }) => {
	console.log(menu)

	return (
		<nav className={styles.nav}>
			<ul className={styles.menu}>
				{menu.length > 0 &&
					menu.map((item, index) => (
						<li key={index} className={styles.menuItem}>
							<Link href={clearMenuUrl(item.url)}>{item.title}</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}

export default Navigation
