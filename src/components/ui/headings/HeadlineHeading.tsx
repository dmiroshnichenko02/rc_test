import clsx from 'clsx'
import { FC, JSXElementConstructor, ReactElement } from 'react'

interface IHeadlineHeading {
	title: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	className?: string
}

const HeadlineHeading: FC<IHeadlineHeading> = ({ title, className }) => {
	return (
		<h4
			className={clsx(
				'text-custom font-medium text-[25px] text-center',
				className
			)}
		>
			{title}
		</h4>
	)
}

export default HeadlineHeading
