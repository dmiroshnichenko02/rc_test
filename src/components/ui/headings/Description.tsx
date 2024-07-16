import clsx from 'clsx'
import { FC, JSXElementConstructor, ReactElement } from 'react'

interface IDescription {
	title: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	className?: string
}

const Description: FC<IDescription> = ({ title, className }) => {
	if (typeof title === 'string') {
		return (
			<p className={clsx('text-[18px] font-[var(--font-space)]', className)}>
				{title}
			</p>
		)
	} else {
		return <>{title}</>
	}
}

export default Description
