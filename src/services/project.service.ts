import { singleProjectUrl } from '@/configs/api.config'
import { IProjectData } from '@/shared/types/project.interface'
import axios from 'axios'

export const ProjectService = {
	async getProjects(projectSlug: string | number) {
		const pathController = typeof projectSlug === 'string' ? '' : 'id/'

		return axios
			.get<IProjectData>(
				`${singleProjectUrl}/${pathController}${projectSlug}?acf_format=standard`
			)
			.then(res => res.data)
	},
}
