import SingleBlog from '@/components/screens/blog/singleBlog/SingleBlog'
import { blogPageUrl } from '@/configs/api.config'
import { ISingleBlog } from '@/shared/types/blog.interface'
import { Metadata } from 'next'
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

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const data: ISingleBlog = await fetch(`${blogPageUrl}/${params.slug}`, {
		next: { revalidate: 3600 },
	}).then(res => res.json())

	return {
		title: data.yoast_head_json?.og_title,
		description: data.yoast_head_json?.schema['@graph'][2].description,
		robots: {
			index: data.yoast_head_json?.robots.index === 'index' ? true : false,
			follow: data.yoast_head_json?.robots.follow === 'follow' ? true : false,
		},
		openGraph: {
			title: data.yoast_head_json?.og_title,
			description: data.yoast_head_json?.schema['@graph'][2].description,
			url: 'https://rcw108.com/',
			siteName: data.yoast_head_json?.og_site_name,
			images: [
				{
					url: data.yoast_head_json?.schema['@graph'][3].logo.url || '',
					width: 800,
					height: 600,
				},
			],
			locale: data.yoast_head_json?.og_locale || '',
			type: 'website',
		},
	}
}

const SingleBlogPage: FC<{ params: { slug: string } }> = async ({ params }) => {
	const data = await getData(params.slug)

	return data && <SingleBlog data={data} />
}

export default SingleBlogPage
