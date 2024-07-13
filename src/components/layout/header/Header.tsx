import { FC } from 'react'

import HeaderLogotype from '@/components/ui/headerLogotype/HeaderLogotype'
import { IFieldMenu } from '@/shared/types/menu.interface'
import styles from './Header.module.scss'
import Navigation from './navigation/Navigation'

interface IHeader {
	menu: IFieldMenu[]
}

const Header: FC<IHeader> = ({ menu }) => {
	return (
		<>
			<header className={styles.header}>
				<div className='container'>
					<div className={styles.wrapper}>
						<div className={styles.logotype}>
							<HeaderLogotype />
						</div>
						<Navigation menu={menu} />
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
