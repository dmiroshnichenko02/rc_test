import { FC, JSXElementConstructor, ReactElement } from 'react'

import clsx from 'clsx'
import Link from 'next/link'
import styles from './Button.module.scss'

interface IButton {
	link: string
	buttonText: string | ReactElement<any, string | JSXElementConstructor<any>>[]
	className?: string
}

const Button: FC<IButton> = ({ buttonText, link, className }) => {
	return (
		<div className={clsx(styles.btn, className)}>
			<Link href={link}>{buttonText}</Link>
		</div>
	)
}

export default Button
