export const clearProjectsLink = (url: string) => {
	return url
		.replace(/^http:\/\/rcw108.com\/dev/, '')
		.replace(/^https:\/\/rcw108.com\/dev/, '')
}
