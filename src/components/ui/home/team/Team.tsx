import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '../../button/Button'
import SubHeading from '../../headings/SubHeading'
import Member from './Member/Member'
import styles from './Team.module.scss'
import { IMember } from './team.interface'

interface ITeam {
	title: string
	team: IMember[]
	firstButtonText: string
	secondButtonText: string
	firstButtonLink: string
	secondButtonLink: string
}

const Team: FC<ITeam> = ({
	firstButtonLink,
	firstButtonText,
	secondButtonLink,
	secondButtonText,
	team,
	title,
}) => {
	return (
		<section className={styles.team} id='team'>
			<div className='container'>
				<SubHeading title={title} className={styles.titles} />
				<div className={styles.wrapper}>
					<Swiper
						spaceBetween={50}
						slidesPerView={3}
						slidesPerGroup={1}
						loop={true}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						{team.map(member => (
							<SwiperSlide key={member.name}>
								<Member
									name={member.name}
									position={member.position}
									img={member.img}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className={styles.btns}>
					<Button link={firstButtonLink} buttonText={firstButtonText} />
					{secondButtonText !== '' && (
						<Button link={secondButtonLink} buttonText={secondButtonText} />
					)}
				</div>
			</div>
		</section>
	)
}

export default Team
