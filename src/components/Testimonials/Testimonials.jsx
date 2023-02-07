import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';

const Testimonials = () => {
	return (
		<div className={css.testimotials}>
			<div className={css.wrapper}>
				<div className={css.container}>
					<span>Top Rated</span>
					<span>
						SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
						REJOICED.
					</span>
				</div>

				<img src={Hero} alt='' />

				<div className={css.container}>
					<span>100k</span>
					<span>Happy Customers with us</span>
				</div>
			</div>

			<div className={css.reviews}>Reviews</div>
			
			<div className={css.carousal}>
				<Swiper
					slidesPerView={3}
					slidesPerGroup={1}
					spaceBetween={20}
					className={css.tCarousel}
				>
					{TestimonialsData.map((testimotial, i) => (
						<SwiperSlide>
							<div className={css.testimotial}>
								<img src={testimotial.image} alt='' />
								<span>{testimotial.comment}</span>
								<hr />
								<span>{testimotial.name}</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
