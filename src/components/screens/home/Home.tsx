'use client'

import HeadSection from '@/components/ui/home/headSection/HeadSection'
import ServicesSection from '@/components/ui/home/servicesSection/ServicesSection'
import { IHome } from '@/shared/types/home.interface'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'

const Home: FC<IHome> = ({ acf, title }) => {
	console.log(acf.sub_title_h)
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
				subTitle={ReactHtmlParser(acf.text_s)}
				reactImage={acf.react_wordpress_img}
				reactImageSecond={acf.react_wordpress_img_second}
				reactImageThird={acf.react_wordpress_img_third}
				btnText={acf.react_wordpress_btn_tx}
				btnLink={acf.react_wordpress_btn_link}
			/>
		</main>
	)
}

export default Home
