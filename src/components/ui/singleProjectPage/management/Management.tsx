import { IImage } from '@/shared/types/project.interface'
import Image from 'next/image'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Button from '../../button/Button'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import styles from './Management.module.scss'

interface IManagement {
	title: string
	text: string
	images: IImage[]
	buttonText: string
	buttonLink: string
}

const Management: FC<IManagement> = ({
	buttonText,
	buttonLink,
	images,
	text,
	title,
}) => {
	return (
		<section className={styles.manage}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						{images && images.length && (
							<div className={styles.images}>
								{images.map((image, index) => (
									<div className={styles.img}>
										<Image
											key={index}
											src={image.url}
											alt={image.title}
											fill
											draggable={false}
										/>
									</div>
								))}
							</div>
						)}
					</div>
					<div className={styles.right}>
						<div className={styles.top}>
							{title && <Heading title={title} className={styles.title} />}
							{text && (
								<Description
									className={styles.descr}
									title={ReactHtmlParser(text)}
								/>
							)}
						</div>
						<div className={styles.btns}>
							{buttonText && (
								<Button
									link={buttonLink}
									buttonText={ReactHtmlParser(buttonText)}
									className={styles.btn}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Management
