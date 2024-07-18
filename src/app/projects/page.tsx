import ProjectsPage from '@/components/screens/projects/ProjectsPage'
import { projectsPageUrl, singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'

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

const Projects = async () => {
	const data = await getData()

	const slugs = await getProjectsSlugs()

	return data && <ProjectsPage data={data} slugs={slugs} />
}

export default Projects
