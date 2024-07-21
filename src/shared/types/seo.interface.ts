export interface IYoastSeo {
	title: string
	robots: {
		index: string
		follow: string
		'max-snippet': string
		'max-image-preview': string
		'max-video-preview': string
	}
	canonical: string
	og_locale: string
	og_type:
		| string
		| 'website'
		| 'article'
		| 'book'
		| 'profile'
		| 'music.song'
		| 'music.album'
		| 'music.playlist'
		| 'music.radio_station'
		| 'video.movie'
		| 'video.episode'
		| 'video.tv_show'
		| 'video.other'
	og_title: string
	og_site_name: string
	twitter_card: string
	schema: {
		'@context': string
		'@graph': [
			{
				'@type': string
				name: string
			},
			{
				'@type': string
				name: string
			},
			{ description: string },
			{
				logo: {
					url: string
				}
			}
		]
	}
}
