import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Button from '../../button/Button'
import Description from '../../headings/Description'
import SubHeading from '../../headings/SubHeading'
import styles from './Works.module.scss'
import SingleWork from './singleWork/SingleWork'

interface ISingleWork {
	text: string
}

interface IWorks {
	title: string
	description: string
	works: ISingleWork[]
	buttonText: string
	buttonLink: string
}

const Works: FC<IWorks> = ({
	title,
	description,
	works,
	buttonText,
	buttonLink,
}) => {
	return (
		<section className={styles.works}>
			<div className='container'>
				<SubHeading title={title} className={styles.title} />
				<Description title={description} className={styles.descr} />

				<div className={styles.wrapper}>
					{works.map((work, index) => (
						<SingleWork key={index} text={ReactHtmlParser(work.text)} />
					))}
				</div>
				<div className={styles.btns}>
					<Button
						link={buttonLink}
						buttonText={ReactHtmlParser(buttonText)}
						className={styles.btn}
					/>
				</div>
			</div>
		</section>
	)
}

export default Works
