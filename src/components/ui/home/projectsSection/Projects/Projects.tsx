'use client'

import { FC } from 'react'
import styles from './Projects.module.scss'
import SingleProject from './SingleProject/SingleProject'
interface IProjects {
	projects: string[] | number[]
}

const Projects: FC<IProjects> = ({ projects }) => {
	return (
		<div className={styles.projects}>
			{projects.map(project => (
				<SingleProject key={project} projectSlug={project} />
			))}
		</div>
	)
}

export default Projects
