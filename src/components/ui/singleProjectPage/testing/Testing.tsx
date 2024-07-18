import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import styles from './Testing.module.scss'

interface ITool {
	list: string
}

interface ITesting {
	title: string
	description: string
	tools: ITool[]
}

const Testing: FC<ITesting> = ({ description, tools, title }) => {
	return (
		<section className={styles.test}>
			<div className='container'>
				<Heading title={title} />
				<Description title={ReactHtmlParser(description)} />
				<div className={styles.wrapper}></div>
			</div>
		</section>
	)
}

export default Testing
