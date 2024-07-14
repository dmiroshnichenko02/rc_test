import Home from '@/components/screens/home/Home'
import { homePageUrl } from '@/configs/api.config'
import { IHome } from '@/shared/types/home.interface'

export const fetchData = async () => {
	const data: IHome = await fetch(homePageUrl, {
		cache: 'force-cache',
	}).then(res => res.json())

	return data
}

export default async function HomePage() {
	const data = await fetchData()

	return data && <Home acf={data.acf} title={data.title} />
}
