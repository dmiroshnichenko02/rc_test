import { Benefit } from '@/shared/types/home.interface'
import { FC } from 'react'
import SingleBenefit from '../singleBenefit/SingleBenefit'

import styles from './Benefits.module.scss'

const Benefits: FC<{ benefits: Benefit[] }> = ({ benefits }) => {
	return (
		<div className={styles.benefits}>
			{benefits.map(benefit => (
				<SingleBenefit key={benefit.text} {...benefit} />
			))}
		</div>
	)
}

export default Benefits
