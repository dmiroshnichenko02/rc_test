import { Benefit } from '@/shared/types/home.interface'
import { motion } from 'framer-motion'
import { FC } from 'react'
import Heading from '../../headings/Heading'
import HeadlineHeading from '../../headings/HeadlineHeading'
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
				<Heading title={title} className={styles.title} />
				<HeadlineHeading title={secondTitle} className={styles.secondTitle} />
				<SubHeading title={subTitle} className={styles.subTitle} />
				<Benefits benefits={benefits} />
			</div>
			<motion.a
				href='#services'
				id={styles.scroll}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: 'spring', stiffness: 300 }}
				onClick={e => {
					e.preventDefault()
					const target = document.getElementById('services')
					if (target) {
						target.scrollIntoView({ behavior: 'smooth' })
					}
				}}
			>
				<span className={styles.scroll}></span>
			</motion.a>
		</section>
	)
}

export default HeadSection
