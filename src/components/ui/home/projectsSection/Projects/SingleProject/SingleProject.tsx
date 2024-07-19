import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useSingleProject } from './useSingleProject'

import Description from '@/components/ui/headings/Description'
import SubHeading from '@/components/ui/headings/SubHeading'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SingleProject.module.scss'

interface ISingleProject {
	projectSlug: number | string
}

const SingleProject: FC<ISingleProject> = ({ projectSlug }) => {
	const { isLoading, data } = useSingleProject(projectSlug)

	if (data === undefined) return null

	return (
		<div>
			{isLoading ? (
				<SkeletonLoader count={1} className='h-[755px] w-full opacity-40' />
			) : (
				<div className={styles.singleProject}>
					<div className={styles.img}>
						<Image
							src={data.acf.image_ts}
							alt={
								typeof data.title === 'string'
									? data.title
									: data.title.rendered
							}
							layout='fill'
							draggable={false}
							priority
						/>
					</div>
					<div className={styles.content}>
						<SubHeading
							title={
								typeof data.title === 'string'
									? ReactHtmlParser(data.title)
									: ReactHtmlParser(data.title.rendered)
							}
							className={styles.title}
						/>
						<Description
							title={
								typeof data.excerpt === 'string'
									? ReactHtmlParser(data.excerpt)
									: ReactHtmlParser(data.excerpt.rendered)
							}
							className={styles.descr}
						/>
						<div className={styles.btns}>
							<Link href={`projects/${data.slug}`} className={styles.detail}>
								<span className={styles.detailText}>View Detail</span>
							</Link>
							<Link href={data.acf.website} className={styles.web}>
								<span className={styles.webText}>Visit Website</span>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default SingleProject
