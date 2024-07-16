import { FC } from 'react'
import { ITestimonial } from '../testimonials.interface'
import styles from './SingleTestimonial.module.scss'

const SingleTestimonial: FC<ITestimonial> = ({ text }) => {
	if (typeof text === 'string') {
		return (
			<div className={styles.testimonial}>
				<p>{text}</p>
			</div>
		)
	} else {
		return <div className={styles.testimonial}>{text}</div>
	}
}

export default SingleTestimonial
