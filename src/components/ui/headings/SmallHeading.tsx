import clsx from 'clsx'
import { FC } from 'react'

interface ISmallHeading {
	title: string
	className?: string
}

const SmallHeading: FC<ISmallHeading> = ({ title, className }) => {
	return <h3 className={clsx('text-black  text-center', className)}>{title}</h3>
}

export default SmallHeading
