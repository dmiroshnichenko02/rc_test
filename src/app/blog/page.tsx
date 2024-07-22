import Blog from '@/components/screens/blog/Blog'
import { blogPageUrl } from '@/configs/api.config'
import { IBlog } from '@/shared/types/blog.interface'
import { Metadata } from 'next'
import { FC } from 'react'

const getData = async () => {
	const data: IBlog[] = await fetch(blogPageUrl, {
		next: { revalidate: 3600 },
	}).then(res => res.json())

	return data
}

export async function generateMetadata(): Promise<Metadata> {
	const data: IBlog = await fetch(blogPageUrl, {
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

const BlogPage: FC = async () => {
	const data = await getData()

	return data && <Blog data={data} />
}

export default BlogPage
