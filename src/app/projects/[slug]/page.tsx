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

const SingleProject: FC<{ params: { slug: string } }> = async ({ params }) => {
	const data = await getData(params.slug)

	return data && <SingleProjectPage data={data} />
}

export default SingleProject
