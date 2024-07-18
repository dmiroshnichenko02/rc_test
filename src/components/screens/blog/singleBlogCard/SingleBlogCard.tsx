import Button from '@/components/ui/button/Button'
import Description from '@/components/ui/headings/Description'
import SubHeading from '@/components/ui/headings/SubHeading'
import { IBlog } from '@/shared/types/blog.interface'
import Image from 'next/image'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './SingleBlogCard.module.scss'

const SingleBlogCard: FC<{ post: IBlog }> = ({ post }) => {
	return (
		<div className={styles.singleBlog}>
			<div className={styles.img}>
				<Image
					src={post.fimg_url}
					alt={post.title.rendered}
					priority
					layout='fill'
				/>
			</div>
			<div className={styles.content}>
				<SubHeading title={post.title.rendered} className={styles.title} />
				<Description
					title={ReactHtmlParser(`${post.content.rendered.slice(0, 160)} ...`)}
				/>
				<div className={styles.btns}>
					<Button buttonText={'Read More'} link={`/blog/${post.slug}`} />
				</div>
			</div>
		</div>
	)
}

export default SingleBlogCard
