'use client'

import HeadSection from '@/components/ui/home/headSection/HeadSection'
import ProjectsSection from '@/components/ui/home/projectsSection/ProjectsSection'
import ServicesSection from '@/components/ui/home/servicesSection/ServicesSection'
import Team from '@/components/ui/home/team/Team'
import Testimonials from '@/components/ui/home/testimonials/Testimonials'
import Works from '@/components/ui/home/works/Works'
import { IHome } from '@/shared/types/home.interface'
import { FC, ReactElement } from 'react'
import ReactHtmlParser from 'react-html-parser'

const Home: FC<IHome> = ({ acf, title }) => {
	return (
		<main>
			<HeadSection
				title={acf.sub_title_h}
				subTitle={acf.title_h}
				secondTitle={acf.second_title}
				benefits={acf.benefits}
			/>
			<ServicesSection
				title={acf.title_s}
				headlessTitle={acf.title_headless}
				subTitle={ReactHtmlParser(acf.text_s) as ReactElement[]}
				reactImage={acf.react_wordpress_img}
				reactImageSecond={acf.react_wordpress_img_second}
				reactImageThird={acf.react_wordpress_img_third}
				btnText={acf.react_wordpress_btn_tx}
				btnLink={acf.react_wordpress_btn_link}
			/>
			<ProjectsSection
				projects={acf.projects}
				technologies={acf.services}
				title={acf.title_p}
				subtitle={acf.description_pro}
				buttonLink={acf.link_btn_p}
				buttonText={ReactHtmlParser(acf.text_circle_p) as ReactElement[]}
			/>
			<Works
				title={acf.title_hw}
				description={acf.text_hw}
				works={acf.content_hw}
				buttonLink={acf.link_circle_hw}
				buttonText={acf.text_circle_tm}
			/>
			<Team
				title={acf.title_team}
				team={acf.team}
				firstButtonText={acf.text_btn_t1}
				firstButtonLink={acf.link_btn_t1}
				secondButtonText={acf.text_btn_t2}
				secondButtonLink={acf.link_btn_t2}
			/>
			<Testimonials title={acf.title_tm} testimonials={acf.testimonials} />
		</main>
	)
}

export default Home
