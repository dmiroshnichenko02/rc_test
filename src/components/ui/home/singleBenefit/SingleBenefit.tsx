import { Benefit } from '@/shared/types/home.interface'
import { FC } from 'react'
import Description from '../../headings/Description'
import SmallHeading from '../../headings/SmallHeading'
import SubHeading from '../../headings/SubHeading'

import clsx from 'clsx'
import styles from './SingleBenefit.module.scss'

const SingleBenefit: FC<Benefit> = ({ number, text, subnumber, title }) => {
	return (
		<div className={styles.singleBenefit}>
			<SubHeading title={title} className={styles.benefitsTitle} />
			<div className={styles.benefitsSubtitle}>
				{number && (
					<SmallHeading
						title={number}
						className=' tracking-[-0.05em] font-[var(--font-mont)] text-6xl'
					/>
				)}{' '}
				{subnumber && <span>{subnumber}</span>}
			</div>
			<Description
				title={text}
				className={clsx(
					'font-medium text-[14px] leading-[30px]',
					styles.benefitsDescr
				)}
			/>
		</div>
	)
}

export default SingleBenefit
