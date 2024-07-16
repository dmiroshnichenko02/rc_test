import Description from '@/components/ui/headings/Description'
import SmallHeading from '@/components/ui/headings/SmallHeading'
import Image from 'next/image'
import { FC } from 'react'
import { IMember } from '../team.interface'
import styles from './Member.module.scss'

const Member: FC<IMember> = ({ img, name, position }) => {
	return (
		<div className={styles.member}>
			<div className={styles.img}>
				<Image draggable={false} layout='fill' src={img} alt={name} priority />
			</div>
			<div className={styles.content}>
				<SmallHeading title={name} className={styles.name} />
				<Description title={position} className={styles.position} />
			</div>
		</div>
	)
}

export default Member
