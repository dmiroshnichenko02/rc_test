'use client'

import { FC } from 'react'
import Button from '../../button/Button'
import { useSingleProject } from '../../home/projectsSection/Projects/SingleProject/useSingleProject'
import SkeletonLoader from '../../SkeletonLoader'
import styles from './NextProject.module.scss'

interface INextProject {
	slug: string
}

const NextProject: FC<INextProject> = ({ slug }) => {
	const { isLoading, data } = useSingleProject(slug)

	return (
		<>
			{isLoading ? (
				<SkeletonLoader count={1} />
			) : data ? (
				<section
					className={styles.next}
					style={{
						backgroundImage: `url(${data.acf.image_ts})`,
					}}
				>
					<div className='container'>
						<div className={styles.wrapper}>
							<Button
								link={`/projects/${data.slug}`}
								buttonText='Next Project'
							/>
						</div>
					</div>
				</section>
			) : null}
		</>
	)
}

export default NextProject
