import Description from '@/components/ui/headings/Description'
import Heading from '@/components/ui/headings/Heading'
import Projects from '@/components/ui/home/projectsSection/Projects/Projects'
import { IProjectData } from '@/shared/types/project.interface'
import { FC, ReactElement } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './ProjectsPage.module.scss'

const ProjectsPage: FC<{ data: IProjectData; slugs: string[] }> = ({
	data,
	slugs,
}) => {
	return (
		<section className={styles.projects}>
			<div className='container'>
				<Heading
					title={
						typeof data.title === 'string'
							? (ReactHtmlParser(data.title) as ReactElement[])
							: (ReactHtmlParser(data.title.rendered) as ReactElement[])
					}
					className={styles.title}
				/>
				<Description
					title={
						typeof data.content === 'string'
							? (ReactHtmlParser(data.content) as ReactElement[])
							: (ReactHtmlParser(data.content.rendered) as ReactElement[])
					}
					className={styles.descr}
				/>
				<div className={styles.wrapper}>
					<Projects projects={slugs} />
				</div>
			</div>
		</section>
	)
}

export default ProjectsPage
