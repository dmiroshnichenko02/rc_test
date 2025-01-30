import { FC, ReactElement } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import SingleWork from '../../home/works/singleWork/SingleWork'
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
				{title && <Heading title={title} className={styles.title} />}
				{description && (
					<Description
						title={ReactHtmlParser(description) as ReactElement[]}
						className={styles.descr}
					/>
				)}
				<div className={styles.wrapper}>
					{tools.length &&
						tools.map(tool => (
							<SingleWork text={ReactHtmlParser(tool.list) as ReactElement[]} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Testing
