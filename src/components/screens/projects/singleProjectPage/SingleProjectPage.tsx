import Development from '@/components/ui/singleProjectPage/development/Development'
import HeadSection from '@/components/ui/singleProjectPage/headSection/HeadSection'
import MainTask from '@/components/ui/singleProjectPage/mainTask/MainTask'
import Management from '@/components/ui/singleProjectPage/management/Management'
import Responsive from '@/components/ui/singleProjectPage/responsive/Responsive'
import Support from '@/components/ui/singleProjectPage/support/Support'
import Testing from '@/components/ui/singleProjectPage/testing/Testing'
import { IProjectData } from '@/shared/types/project.interface'
import { FC } from 'react'
import styles from './SingleProjectPage.module.scss'

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
			<Testing
				title={data.acf.title_ts}
				description={data.acf.description_ts}
				tools={data.acf.tools}
			/>
			<Support
				title={data.acf.title_sup}
				description={data.acf.description_sup}
				subtitle={data.acf.subtitle}
				text={data.acf.text_sup}
				link={data.acf.link_sup}
				img={data.acf.image_sup}
			/>
			<Management
				text={data.acf.text_mn}
				title={data.acf.title_mn}
				images={data.acf.images_mn}
				buttonText={data.acf.text_button_mn}
				buttonLink={data.acf.button_link_man}
			/>
		</main>
	)
}

export default SingleProjectPage
