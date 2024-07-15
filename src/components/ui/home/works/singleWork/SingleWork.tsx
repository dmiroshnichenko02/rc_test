import { FC, JSXElementConstructor, ReactElement } from 'react'
import styles from './SingleWork.module.scss'

interface ISingleWork {
	text: string | ReactElement<any, string | JSXElementConstructor<any>>[]
}

const SingleWork: FC<ISingleWork> = ({ text }) => {
	return <div className={styles.content}>{text}</div>
}

export default SingleWork
