import { Benefit } from '@/shared/types/home.interface'
import Image from 'next/image'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Heading from '../../headings/Heading'
import SingleBenefit from '../../home/singleBenefit/SingleBenefit'
import styles from './HeadSection.module.scss'

interface IInformation extends Pick<Benefit, 'number' | 'subnumber' | 'text'> {}

interface IHeadSection {
	title: string
	logotype: string
	information: IInformation[]
}

const HeadSection: FC<IHeadSection> = ({ information, logotype, title }) => {
	return (
		<section className={styles.headSection}>
			<div className='container'>
				{title && (
					<Heading title={ReactHtmlParser(title)} className={styles.title} />
				)}
				{logotype && logotype !== '' && (
					<div className={styles.img}>
						<Image
							src={logotype}
							alt={title}
							width={350}
							height={350}
							priority
							draggable={false}
						/>
					</div>
				)}
				{information && information.length && (
					<div className={styles.info}>
						{information.map(({ number, subnumber, text }) => (
							<SingleBenefit
								title=''
								number={number}
								subnumber={subnumber}
								text={text}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default HeadSection
