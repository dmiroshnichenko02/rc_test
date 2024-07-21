'use client'

import { useEffect, useState } from 'react'

export const useScreenDetector = () => {
	const [width, setWidth] = useState<number>(0)

	let isMobile = false
	let isTablet = false
	let isDesktop = true

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange)
		handleWindowSizeChange()

		return () => {
			window.removeEventListener('resize', handleWindowSizeChange)
		}
	}, [])

	isMobile = width <= 768
	isTablet = width <= 1024
	isDesktop = width > 1024

	return { isMobile, isTablet, isDesktop }
}
