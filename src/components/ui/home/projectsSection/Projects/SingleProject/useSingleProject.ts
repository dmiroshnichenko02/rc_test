import { ProjectService } from '@/services/project.service'
import { useQuery } from '@tanstack/react-query'

export const useSingleProject = (projectId: number) => {
	const { isLoading, data } = useQuery({
		queryKey: ['singleProject', projectId],
		queryFn: () => ProjectService.getProjects(projectId),
	})

	return {
		isLoading,
		data,
	}
}
