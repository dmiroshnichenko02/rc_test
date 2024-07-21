import Home from '@/components/screens/home/Home'
import { homePageUrl } from '@/configs/api.config'
import { IHome } from '@/shared/types/home.interface'
import { Metadata } from 'next'

const getData = async () => {
	const data: IHome = await fetch(homePageUrl, {
		cache: 'force-cache',
	}).then(res => res.json())

	return data
}

export async function generateMetadata(): Promise<Metadata> {
	const data: IHome = await fetch(homePageUrl).then(res => res.json())

	return {
		title: data.yoast_head_json?.og_title,
		description: data.yoast_head_json?.schema['@graph'][2].description,
		robots: {
			index: data.yoast_head_json?.robots.index === 'index' ? true : false,
			follow: data.yoast_head_json?.robots.follow === 'follow' ? true : false,
		},
		openGraph: {
			title: data.yoast_head_json?.og_title,
			description: data.yoast_head_json?.schema['@graph'][2].description,
			url: 'https://rcw108.com/',
			images: [
				{
					url: data.yoast_head_json?.schema['@graph'][3].logo.url || '',
					width: 800,
					height: 600,
				},
			],
			locale: data.yoast_head_json?.og_locale || '',
			type: 'website',
		},
	}
}

const HomePage = async () => {
	const data = await getData()

	return <>{data && <Home acf={data.acf} title={data.title} />}</>
}

export default HomePage
