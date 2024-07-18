import Blog from '@/components/screens/blog/Blog'
import { blogPageUrl } from '@/configs/api.config'
import { IBlog } from '@/shared/types/blog.interface'
import { FC } from 'react'

const getData = async () => {
	const data: IBlog[] = await fetch(blogPageUrl, {
		next: { revalidate: 3600 },
	}).then(res => res.json())

	return data
}

const BlogPage: FC = async () => {
	const data = await getData()

	return data && <Blog data={data} />
}

export default BlogPage
