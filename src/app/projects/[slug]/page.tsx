import SingleProjectPage from '@/components/screens/projects/singleProjectPage/SingleProjectPage'
import { singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'
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

const SingleProject: FC<{ params: { slug: string } }> = async ({ params }) => {
	const data = await getData(params.slug)
	const randomSlug = await getNextProjectSlug(params.slug)

	return (
		data &&
		randomSlug && <SingleProjectPage nextSlug={randomSlug} data={data} />
	)
}

export default SingleProject
