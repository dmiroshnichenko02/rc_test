import Description from '@/components/ui/headings/Description'
import Heading from '@/components/ui/headings/Heading'
import Projects from '@/components/ui/home/projectsSection/Projects/Projects'
import { IProjectData } from '@/shared/types/project.interface'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './ProjectsPage.module.scss'

const ProjectsPage: FC<{ data: IProjectData; ids: number[] }> = ({
	data,
	ids,
}) => {
	return (
		<section className={styles.projects}>
			<div className='container'>
				<Heading title={data.title.rendered} className={styles.title} />
				<Description
					title={ReactHtmlParser(data.content.rendered)}
					className={styles.descr}
				/>
				<div className={styles.wrapper}>
					<Projects projects={ids} />
				</div>
			</div>
		</section>
	)
}

export default ProjectsPage
