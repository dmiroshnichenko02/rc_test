import ProjectsPage from '@/components/screens/projects/ProjectsPage'
import { projectsPageUrl, singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'
import { Metadata } from 'next'

const getData = async () => {
	const data: IProjectData = await fetch(projectsPageUrl, {
		cache: 'force-cache',
	}).then(res => res.json())

	return data
}

const getProjectsSlugs = async () => {
	const data: IProjectData[] = await fetch(singleProjectUrl, {
		next: { revalidate: 86400 },
	}).then(res => res.json())

	const slugs = data.map(item => item.slug)

	return slugs
}

export async function generateMetadata(): Promise<Metadata> {
	const data: IProjectData = await fetch(projectsPageUrl, {
		next: { revalidate: 3600 },
	}).then(res => res.json())

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
			siteName: data.yoast_head_json?.og_site_name,
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

const Projects = async () => {
	const data = await getData()

	const slugs = await getProjectsSlugs()

	return data && <ProjectsPage data={data} slugs={slugs} />
}

export default Projects
