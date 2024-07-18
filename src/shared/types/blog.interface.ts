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
}

export interface ISingleBlog {
	id: number
	title: string
	content: string
	slug: string
	date: string
	featured_image: string
}
