import { Benefit } from '@/shared/types/home.interface'
import { FC } from 'react'
import Heading from '../../headings/Heading'
import SubHeading from '../../headings/SubHeading'
import Benefits from '../benefits/Benefits'
import styles from './HeadSection.module.scss'

interface IHeadSection {
	title: string
	secondTitle: string
	subTitle: string
	benefits: Benefit[]
}

const HeadSection: FC<IHeadSection> = ({
	benefits,
	secondTitle,
	subTitle,
	title,
}) => {
	return (
		<section className={styles.headSection}>
			<div className='container'>
				<Heading title={title} />
				<SubHeading
					title={secondTitle}
					className='text-custom font-[var(--font-space)]'
				/>
				<SubHeading title={subTitle} className={styles.subTitle} />
				<Benefits benefits={benefits} />
			</div>
			<a href='#services' id={styles.scroll}>
				<span className={styles.scroll}></span>
			</a>
		</section>
	)
}

export default HeadSection
