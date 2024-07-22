import { IYoastSeo } from './seo.interface'

enum Status {
	PUBLISH = 'publish',
	DRAFT = 'draft',
}

export interface IBlog {
	id: number
	slug: string
	status: Status
	title: {
		rendered: string
	}
	content: {
		rendered: string
	}
	fimg_url: string
	yoast_head_json: IYoastSeo
}

export interface ISingleBlog {
	id: number
	title: string
	content: string
	slug: string
	date: string
	featured_image: string
	yoast_head_json: IYoastSeo
}
