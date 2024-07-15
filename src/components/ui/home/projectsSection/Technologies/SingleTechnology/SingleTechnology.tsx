import SmallHeading from '@/components/ui/headings/SmallHeading'
import { IService } from '@/shared/types/home.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SingleTechnology.module.scss'

interface ISingleTechnology {
	technology: IService
}

const SingleTechnology: FC<ISingleTechnology> = ({ technology }) => {
	return (
		<div className={styles.technology}>
			<div className={styles.img}>
				<Image
					src={technology.img}
					alt={technology.title}
					width={45}
					height={45}
					draggable={false}
				/>
			</div>
			<SmallHeading title={technology.title} className={styles.title} />
		</div>
	)
}

export default SingleTechnology
