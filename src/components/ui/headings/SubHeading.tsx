import clsx from 'clsx'
import { FC, JSXElementConstructor, ReactElement } from 'react'

interface ISubHeading {
	title: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	className?: string
}

const SubHeading: FC<ISubHeading> = ({ title, className }) => {
	return (
		<h2
			className={clsx(
				'text-black font-normal text-[25px] text-center uppercase',
				className
			)}
		>
			{title}
		</h2>
	)
}

export default SubHeading
