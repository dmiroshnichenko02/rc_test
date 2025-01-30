import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { FC, ReactElement } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useSingleProject } from './useSingleProject'

import Description from '@/components/ui/headings/Description'
import SubHeading from '@/components/ui/headings/SubHeading'
import { useScreenDetector } from '@/hooks/useScreenDetector'
import Image from 'next/image'
import Link from 'next/link'
import styles from './SingleProject.module.scss'

interface ISingleProject {
	projectSlug: number | string
}

const SingleProject: FC<ISingleProject> = ({ projectSlug }) => {
	const { isLoading, data } = useSingleProject(projectSlug)
	const { isMobile, isTablet } = useScreenDetector()

	if (data === undefined) {
		if (isTablet) {
			return (
				<SkeletonLoader count={1} className='h-[690px] w-full opacity-40' />
			)
		}

		if (isMobile) {
			return (
				<SkeletonLoader count={1} className='h-[560px] w-full opacity-40' />
			)
		}

		return <SkeletonLoader count={1} className='h-[755px] w-full opacity-40' />
	}

	return (
		<>
			<div className={styles.singleProject}>
				<div className={styles.img}>
					<Image
						src={data.acf.image_ts}
						alt={
							typeof data.title === 'string' ? data.title : data.title.rendered
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
								? (ReactHtmlParser(data.title) as ReactElement[])
								: (ReactHtmlParser(data.title.rendered) as ReactElement[])
						}
						className={styles.title}
					/>
					<Description
						title={
							typeof data.excerpt === 'string'
								? (ReactHtmlParser(data.excerpt) as ReactElement[])
								: (ReactHtmlParser(data.excerpt.rendered) as ReactElement[])
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
		</>
	)
}

export default SingleProject
