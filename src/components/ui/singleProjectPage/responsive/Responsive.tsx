import { FC, ReactElement } from 'react'

import { IImage } from '@/shared/types/project.interface'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import styles from './Responsive.module.scss'

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
					{title && <Heading title={title} className={styles.title} />}
					{description && (
						<Description
							title={ReactHtmlParser(description) as ReactElement[]}
							className={styles.description}
						/>
					)}
					{images && images.length && (
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
					)}
				</div>
			</div>
		</section>
	)
}

export default Responsive
