'use client'

import { FC } from 'react'

interface IBurger {
	open: boolean
	setOpen: (open: boolean) => void
}

const Burger: FC<IBurger> = ({ open, setOpen }) => {
	return (
		<>
			<svg
				className={`ham hamRotate ham4 ${open ? 'active' : ''}`}
				id='navToggle'
				viewBox='0 0 100 100'
				width='60'
				onClick={() => setOpen(!open)}
			>
				<path
					className='line top'
					d='m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20'
				></path>
				<path className='line middle' d='m 70,50 h -40'></path>
				<path
					className='line bottom'
					d='m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20'
				></path>
			</svg>
		</>
	)
}

export default Burger
