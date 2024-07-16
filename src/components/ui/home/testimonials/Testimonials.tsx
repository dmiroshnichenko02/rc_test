import clsx from 'clsx'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SubHeading from '../../headings/SubHeading'
import SingleTestimonial from './singleTestimonial/SingleTestimonial'
import styles from './Testimonials.module.scss'

interface ITestimonials {
	title: string
	testimonials: { text: string }[]
}

const Testimonials: FC<ITestimonials> = ({ testimonials, title }) => {
	return (
		<section className={clsx(styles.testimonials, 'testimonials')}>
			<div className='container'>
				<SubHeading title={title} />
				<div className={styles.wrapper}>
					<Swiper
						spaceBetween={50}
						slidesPerView={1}
						slidesPerGroup={1}
						speed={800}
						loop={true}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide key={index}>
								<SingleTestimonial text={ReactHtmlParser(testimonial.text)} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
