import Image from 'next/image'
import { FC } from 'react'
import Button from '../../button/Button'
import Description from '../../headings/Description'
import Heading from '../../headings/Heading'
import styles from './MainTask.module.scss'

interface IMainTask {
	title: string
	description: string
	image: string
	website: string
}

const MainTask: FC<IMainTask> = ({ title, description, image, website }) => {
	return (
		<section className={styles.mainTask}>
			<div className='container'>
				{title && <Heading title={title} className={styles.title} />}
				{description && (
					<Description title={description} className={styles.descr} />
				)}
				{image && (
					<div className={styles.view}>
						<div className={styles.box}>
							<Image
								src={image}
								alt={title}
								width={900}
								height={600}
								priority
								draggable={false}
							/>
							{website && (
								<div className={styles.website}>
									<Button buttonText={'Visit Website'} link={website} />
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default MainTask
