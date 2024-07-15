import { IService } from '@/shared/types/home.interface'
import { FC } from 'react'
import SingleTechnology from './SingleTechnology/SingleTechnology'
import styles from './Technologies.module.scss'

interface ITechnologies {
	technologies: IService[]
}

const Technologies: FC<ITechnologies> = ({ technologies }) => {
	return (
		<div className={styles.technologies}>
			{technologies.map(technology => (
				<SingleTechnology key={technology.title} technology={technology} />
			))}
		</div>
	)
}

export default Technologies
