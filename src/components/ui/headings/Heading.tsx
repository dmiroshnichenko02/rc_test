import clsx from 'clsx'
import { FC, JSXElementConstructor, ReactElement } from 'react'

interface IHeading {
	title: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={clsx(
				'text-black font-semibold text-[65px] text-center',
				className
			)}
		>
			{title}
		</h1>
	)
}

export default Heading
