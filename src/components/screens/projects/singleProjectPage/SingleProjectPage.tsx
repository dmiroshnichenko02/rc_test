import Development from '@/components/ui/singleProjectPage/development/Development'
import HeadSection from '@/components/ui/singleProjectPage/headSection/HeadSection'
import MainTask from '@/components/ui/singleProjectPage/mainTask/MainTask'
import Responsive from '@/components/ui/singleProjectPage/responsive/Responsive'
import { IProjectData } from '@/shared/types/project.interface'
import { FC } from 'react'
import styles from './singleProjectPage.module.scss'

const SingleProjectPage: FC<{ data: IProjectData }> = ({ data }) => {
	return (
		<main className={styles.main}>
			<HeadSection
				title={
					typeof data.title === 'string' ? data.title : data.title.rendered
				}
				logotype={data.acf.logo_company}
				information={data.acf.informations}
			/>

			<MainTask
				title={data.acf.title_tas}
				description={data.acf.description_tas}
				image={data.acf.image_ts}
				website={data.acf.website}
			/>

			<Development
				title={data.acf.title_dv}
				description={data.acf.description_dv}
				image={data.acf.image_dv}
			/>
			<Responsive
				title={data.acf.title_res}
				description={data.acf.description_res}
				images={data.acf.images_res}
			/>
		</main>
	)
}

export default SingleProjectPage
