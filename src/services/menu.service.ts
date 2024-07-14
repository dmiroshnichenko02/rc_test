import { getMenuUrl } from '@/configs/api.config'
import { IMenu } from '@/shared/types/menu.interface'
import axios from 'axios'

export const MenuService = {
	getMenuData: async () => {
		return await axios.get<IMenu[]>(getMenuUrl).then(res => res.data[0])
	},
}
