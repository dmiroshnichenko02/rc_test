export const clearMenuUrl = (url: string) => {
	if (url === '/') return url
	if (url.includes('#')) return url
	return '/' + url.replace(/^http:\/\//, '').replace(/^https:\/\//, '')
}
