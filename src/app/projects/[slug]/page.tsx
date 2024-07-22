import SingleProjectPage from '@/components/screens/projects/singleProjectPage/SingleProjectPage'
import { singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'
import { Metadata } from 'next'
import { FC } from 'react'

export const dynamicParams = true

export async function generateStaticParams() {
	try {
		const res = await fetch(singleProjectUrl)
		const projects = await res.json()

		return projects.map((project: { slug: string }) => {
			return {
				slug: project.slug,
			}
		})
	} catch (error) {
		return []
	}
}

const getData = async (slug: string) => {
	if (!slug) return
	const data: IProjectData = await fetch(`${singleProjectUrl}/${slug}`).then(
		res => res.json()
	)

	return data
}

const getNextProjectSlug = async (slug: string) => {
	if (!slug) return
	const data: IProjectData[] = await fetch(singleProjectUrl).then(res =>
		res.json()
	)

	const notCurrentProjectSlugs = data.filter(project => project.slug !== slug)

	const randomSlug =
		notCurrentProjectSlugs[
			Math.floor(Math.random() * notCurrentProjectSlugs.length)
		].slug

	return randomSlug
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const data: IProjectData = await fetch(`${singleProjectUrl}/${params.slug}`, {
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

const SingleProject: FC<{ params: { slug: string } }> = async ({ params }) => {
	const data = await getData(params.slug)
	const randomSlug = await getNextProjectSlug(params.slug)

	return (
		data &&
		randomSlug && <SingleProjectPage nextSlug={randomSlug} data={data} />
	)
}

export default SingleProject
