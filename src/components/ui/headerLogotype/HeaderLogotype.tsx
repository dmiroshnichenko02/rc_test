'use client'

import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './HeaderLogotype.module.scss'

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i: number) => {
		const delay = i * 0.5
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		}
	},
}

const HeaderLogotype = () => {
	const [filled, setFilled] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setFilled(true), 2500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<Link href='/' aria-label='Logotype and link to home'>
			<motion.svg
				width='123'
				height='71'
				viewBox='0 0 123 71'
				initial='hidden'
				animate='visible'
				className={styles.image}
			>
				<motion.circle
					cx='35'
					cy='35'
					r='30'
					stroke='#000'
					variants={draw}
					custom={1}
					className={`${styles.shape} ${styles.first}`}
				/>
				<motion.circle
					cx='89'
					cy='35'
					r='14'
					stroke='#000'
					variants={draw}
					custom={2}
					className={`${styles.shape} ${filled ? styles.filled : ''}`}
				/>
				<motion.circle
					cx='115'
					cy='35'
					r='7'
					stroke='#000'
					variants={draw}
					custom={3}
					className={`${styles.shape} ${filled ? styles.filled : ''}`}
				/>
			</motion.svg>
		</Link>
	)
}

export default HeaderLogotype
