import { FC, ReactElement } from 'react'

import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'
import Button from '../../button/Button'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import SmallHeading from '../../headings/SmallHeading'
import styles from './Support.module.scss'

interface ISupport {
	title: string
	subtitle: string
	description: string
	text: string
	link: string
	img: string
}

const Support: FC<ISupport> = ({
	description,
	img,
	link,
	subtitle,
	text,
	title,
}) => {
	return (
		<section className={styles.support}>
			<div className='container'>
				<div className={styles.wrapper}>
					{title && <Heading title={title} className={styles.title} />}
					{description && (
						<Description title={description} className={styles.description} />
					)}
					<div className={styles.box}>
						<div className={styles.left}>
							{subtitle && (
								<SmallHeading title={subtitle} className={styles.subtitle} />
							)}
							{text && (
								<Description
									title={ReactHtmlParser(text) as ReactElement[]}
									className={styles.text}
								/>
							)}
							<div className={styles.btns}>
								{link && <Button link={link} buttonText='Connect to Slack' />}
							</div>
						</div>
						<div className={styles.right}>
							{img && (
								<div className={styles.img}>
									<Image
										src={img}
										alt={title}
										fill
										priority
										draggable={false}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Support
