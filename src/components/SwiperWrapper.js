import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperWrapper() {
	return (
		<section id='list' className='sliders'>
			<Swiper
				className='rfa-slide-container rfa-slide-container--chapter-select'
				spaceBetween={50}
				loop
				slidesPerView={3}
				effect='fade'
				centeredSlides
				fadeEffect={true}
				wrapperClass='rfa-chap-sect-wrapper'>
				<SwiperSlide
					className='swiper-slide rfa-chap-sect-slide slide__chap2'
					data-hash='storm'>
					<div>
						<div className='slide-cover'></div>
						<h3>WAKANDA</h3>

						<button
							className='button button--winona button--border-thin button--round-s'
							data-text='Read Chapter'>
							<span>Read Chapter</span>
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className='swiper-slide rfa-chap-sect-slide slide__chap3'
					data-hash='lukeCage'>
					<div className='slide-cover'></div>
					<h3>HOW TRADITION AND FUTURISM INSPIRE T’CHALLA’S LOOK</h3>

					<button
						className='button button--winona button--border-thin button--round-s'
						data-text='Read Chapter'>
						<span>Read Chapter</span>
					</button>
				</SwiperSlide>
				<SwiperSlide
					className='swiper-slide rfa-chap-sect-slide slide__chap4'
					data-hash='bishop'>
					<div className='slide-cover'></div>
					<h3>WHAT INSPIRES THE WAKANDAN WARDROBE</h3>
					<button
						className='button button--winona button--border-thin button--round-s'
						data-text='Read Chapter'>
						<span>Read Chapter</span>
					</button>
				</SwiperSlide>
				<SwiperSlide
					className='swiper-slide rfa-chap-sect-slide slide__chap5'
					data-hash='blade'>
					<div className='slide-cover'></div>
					<h3>
						AFROCENTRIC AESTHETICS <br />
						BEYOND BLACK PANTHER
					</h3>
					<button
						className='button button--winona button--border-thin button--round-s'
						data-text='Read Chapter'>
						<span>Read Chapter</span>
					</button>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
