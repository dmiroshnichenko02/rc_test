import { FC, JSXElementConstructor, ReactElement } from 'react'

import Image from 'next/image'
import Button from '../../button/Button'
import Description from '../../headings/Description'
import SubHeading from '../../headings/SubHeading'
import styles from './ServicesSection.module.scss'

interface IServicesSection {
	headlessTitle: string
	title: string
	subTitle: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	reactImage: string
	reactImageSecond: string
	reactImageThird: string
	btnLink: string
	btnText: string
}

const ServicesSection: FC<IServicesSection> = ({
	btnLink,
	btnText,
	headlessTitle,
	reactImage,
	reactImageSecond,
	reactImageThird,
	subTitle,
	title,
}) => {
	return (
		<section className={styles.services} id='services'>
			<div className='container'>
				<SubHeading className={styles.title} title={headlessTitle} />
				<SubHeading title={title} className={styles.secondTitle} />
				<Description title={subTitle} className={styles.subTitle} />
				<div className={styles.img}>
					<Image
						src={reactImage}
						alt={headlessTitle}
						draggable={false}
						priority
						width={'400'}
						height={'250'}
					/>
					<Image
						src={reactImageSecond}
						alt={headlessTitle}
						draggable={false}
						priority
						width={'70'}
						height={'63'}
						className={styles.heart}
					/>
					<Image
						src={reactImageThird}
						alt={headlessTitle}
						draggable={false}
						priority
						width={'370'}
						height={'370'}
					/>
				</div>
			</div>
			<div className={styles.btns}>
				<Button
					link={btnLink}
					buttonText={btnText}
					className={styles.btnColor}
				/>
			</div>
		</section>
	)
}

export default ServicesSection
