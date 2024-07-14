export const clearMenuUrl = (url: string) => {
	console.log(url)
	if (url === '/') return url
	if (url.includes('#')) return url
	return url.replace(/^http:\//, '').replace(/^https:\//, '')
}
