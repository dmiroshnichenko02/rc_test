import { ProjectService } from '@/services/project.service'
import { useQuery } from '@tanstack/react-query'

export const useSingleProject = (projectSlug: string | number) => {
	const { isLoading, data } = useQuery({
		queryKey: ['singleProject', projectSlug],
		queryFn: () => ProjectService.getProjects(projectSlug),
	})

	return {
		isLoading,
		data,
	}
}
