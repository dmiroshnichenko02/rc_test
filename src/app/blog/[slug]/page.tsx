import SingleBlog from '@/components/screens/blog/singleBlog/SingleBlog'
import { blogPageUrl } from '@/configs/api.config'
import { ISingleBlog } from '@/shared/types/blog.interface'
import { FC } from 'react'

export async function generateStaticParams() {
	try {
		const res = await fetch(blogPageUrl)
		const blogs = await res.json()
		return blogs.map((blog: { slug: string }) => ({
			slug: blog.slug,
		}))
	} catch (error) {
		return []
	}
}

const getData = async (slug: string) => {
	if (!slug) return
	const data: ISingleBlog = await fetch(`${blogPageUrl}/${slug}`).then(res =>
		res.json()
	)

	return data
}

const SingleBlogPage: FC<{ params: { slug: string } }> = async ({ params }) => {
	const data = await getData(params.slug)

	return data && <SingleBlog data={data} />
}

export default SingleBlogPage
