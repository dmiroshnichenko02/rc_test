import NotFound from '@/components/screens/notFound/NotFound'
import { optionsUrl } from '@/configs/api.config'
import { INotFound } from '@/shared/types/notFound.interface'
import { FC } from 'react'

const getData = async () => {
	const data: INotFound = await fetch(optionsUrl, {
		cache: 'force-cache',
	}).then(res => res.json())

	return data
}

const NotFoundPage: FC = async () => {
	const options = await getData()

	return <>{options && <NotFound options={options} />}</>
}

export default NotFoundPage
