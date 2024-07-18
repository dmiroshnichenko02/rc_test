import { FC } from 'react'

import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import styles from './Responsive.module.scss'

interface IImage {
	title: string
	url: string
}

interface IResponsive {
	title: string
	description: string
	images: IImage[]
}

const Responsive: FC<IResponsive> = ({ description, images, title }) => {
	return (
		<section className={styles.resp}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Heading title={title} className={styles.title} />
					<Description
						title={ReactHtmlParser(description)}
						className={styles.description}
					/>
					<div className={styles.images}>
						{images.map((image, index) => (
							<div className={styles.img} key={index}>
								<Image
									src={image.url}
									alt={image.title}
									draggable={false}
									priority
									fill
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Responsive
