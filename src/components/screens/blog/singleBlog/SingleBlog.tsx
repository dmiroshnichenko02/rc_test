import Heading from '@/components/ui/headings/Heading'
import { ISingleBlog } from '@/shared/types/blog.interface'
import Image from 'next/image'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './SingleBlog.module.scss'

const SingleBlog: FC<{ data: ISingleBlog }> = ({ data }) => {
	return (
		<section className={styles.singleBlog}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Heading title={data.title} className={styles.title} />
					<div className={styles.divider}></div>
					<div className={styles.img}>
						<Image src={data.featured_image} alt={data.title} fill />
					</div>

					<div className={styles.content}>{ReactHtmlParser(data.content)}</div>
				</div>
			</div>
		</section>
	)
}

export default SingleBlog
