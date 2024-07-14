import { MenuService } from '@/services/menu.service'
import { useQuery } from '@tanstack/react-query'

export const useHeaderMenu = () => {
	const { isLoading, data } = useQuery({
		queryKey: ['menu'],
		queryFn: () => MenuService.getMenuData(),
	})

	return {
		isLoading,
		data,
	}
}
