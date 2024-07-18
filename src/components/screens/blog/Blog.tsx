import { IBlog } from '@/shared/types/blog.interface'
import { FC } from 'react'
import styles from './Blog.module.scss'
import SingleBlogCard from './singleBlogCard/SingleBlogCard'

const Blog: FC<{ data: IBlog[] }> = ({ data }) => {
	return (
		<section className={styles.blog}>
			<div className='container'>
				<div className={styles.wrapper}>
					{data.map(post => (
						<SingleBlogCard post={post} key={post.id} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Blog
