import { singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'
import axios from 'axios'

export const ProjectService = {
	async getProjects(projectId: number) {
		return axios
			.get<IProjectData>(`${singleProjectUrl}/${projectId}?acf_format=standard`)
			.then(res => res.data)
	},
}
