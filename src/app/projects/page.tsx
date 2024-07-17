import ProjectsPage from '@/components/screens/projects/ProjectsPage'
import { projectsPageUrl, singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'

const getData = async () => {
	const data: IProjectData = await fetch(projectsPageUrl, {
		cache: 'force-cache',
	}).then(res => res.json())

	return data
}

const getProjectsIds = async () => {
	const data: IProjectData[] = await fetch(singleProjectUrl, {
		next: { revalidate: 86400 },
	}).then(res => res.json())

	const ids = data.map(item => item.id)

	return ids
}

const Projects = async () => {
	const data = await getData()

	const ids = await getProjectsIds()

	return data && <ProjectsPage data={data} ids={ids} />
}

export default Projects
