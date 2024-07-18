import SingleBlog from '@/components/screens/blog/singleBlog/SingleBlog'
import { blogPageUrl } from '@/configs/api.config'
import { IBlog, ISingleBlog } from '@/shared/types/blog.interface'
import { FC } from 'react'

export async function generateStaticParams() {
	try {
		const data: IBlog[] = await fetch(blogPageUrl).then(res => res.json())

		const paths = data.map((blog: IBlog) => ({
			params: { slug: blog.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
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
