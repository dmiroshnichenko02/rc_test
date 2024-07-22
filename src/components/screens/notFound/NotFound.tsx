'use client'

import Button from '@/components/ui/button/Button'
import Description from '@/components/ui/headings/Description'
import Heading from '@/components/ui/headings/Heading'
import { INotFound } from '@/shared/types/notFound.interface'
import Image from 'next/image'
import { FC } from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from './NotFound.module.scss'

const NotFound: FC<{ options: INotFound }> = ({ options }) => {
	return (
		<section className={styles.notFound}>
			<div className='container'>
				<Heading title={options.title_ch} className={styles.title} />
				<Description
					title={ReactHtmlParser(options.subtitle)}
					className={styles.descr}
				/>
				<div className={styles.img}>
					<Image
						src={options.image}
						alt={options.title_ch}
						draggable={false}
						fill
					/>
				</div>
				<div className={styles.btns}>
					<Button buttonText={options.text_button} link='/' />
				</div>
			</div>
		</section>
	)
}

export default NotFound
