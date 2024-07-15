import { IService } from '@/shared/types/home.interface'
import { FC, JSXElementConstructor, ReactElement } from 'react'
import Button from '../../button/Button'
import Description from '../../headings/Description'
import SubHeading from '../../headings/SubHeading'
import Technologies from './Technologies/Technologies'

interface IProjectsSection {
	title: string
	subtitle: string
	technologies: IService[]
	projects: number[]
	buttonText: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	buttonLink: string
}

import Projects from './Projects/Projects'
import styles from './ProjectsSection.module.scss'

const ProjectsSection: FC<IProjectsSection> = ({
	buttonLink,
	buttonText,
	projects,
	technologies,
	subtitle,
	title,
}) => {
	return (
		<section className={styles.projects}>
			<div className='container'>
				<SubHeading title={title} className={styles.title} />
				<Description title={subtitle} className={styles.descr} />
				<Technologies technologies={technologies} />
				<Projects projects={projects} />
				<div className={styles.btns}>
					<Button
						link={buttonLink}
						buttonText={buttonText}
						className={styles.button}
					/>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection
