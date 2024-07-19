import { FC } from 'react'

import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import styles from './Development.module.scss'

interface IDevelopment {
	title: string
	description: string
	image: string
}

const Development: FC<IDevelopment> = ({ description, image, title }) => {
	return (
		<section className={styles.dev}>
			<div className='container'>
				{title && <Heading title={title} className={styles.title} />}
				<div className={styles.wrapper}>
					{image && (
						<div className={styles.img}>
							<Image
								src={image}
								alt={title}
								draggable={false}
								priority
								width={700}
								height={1200}
							/>
						</div>
					)}
					{description && <Description title={ReactHtmlParser(description)} />}
				</div>
			</div>
		</section>
	)
}

export default Development
