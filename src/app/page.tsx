import Home from '@/components/screens/home/Home'
import { homePageUrl } from '@/configs/api.config'
import { IHome } from '@/shared/types/home.interface'

const getData = async () => {
	const data: IHome = await fetch(homePageUrl, {
		cache: 'force-cache',
	}).then(res => res.json())

	return data
}

const HomePage = async () => {
	const data = await getData()

	return data && <Home acf={data.acf} title={data.title} />
}

export default HomePage
