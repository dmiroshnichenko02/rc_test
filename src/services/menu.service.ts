import { IMenu } from '@/shared/types/menu.interface'
import axios from 'axios'

export const MenuService = {
	getMenuData: async () => {
		return await axios
			.get<IMenu[]>('https://rcw108.com/dev/wp-json/wp/v2/menus')
			.then(res => res.data[0])
	},
}
