import React, { useEffect, useRef, useState } from 'react';
import Latest from './Latest';
import NowPlaying from './NowPlaying';
import RecentMovies from './RecentMovies';
import SwiperWrapper from './SwiperWrapper';

import 'swiper/css';
import { useSetRecoilState } from 'recoil';
import { scrollState } from '../recoil/atoms/scrollState';

export default function Main() {
	const boxRef = useRef(null);
	const boxRef2 = useRef(null);
	const setScroll = useSetRecoilState(scrollState);
	const [top, setTop] = useState(false);

	useEffect(() => {
		if (boxRef.current && boxRef2.current) {
			setScroll([0, boxRef.current.offsetTop, boxRef2.current.offsetTop]);
		}
	}, []);

	useEffect(() => {
		if (top) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			setTop(false);
		}
	}, [top]);

	return (
		<main>
			<div className='top' onClick={() => setTop(true)}>
				GO TOP
			</div>
			<Latest />
			<NowPlaying />
			<div className='box' ref={boxRef}></div>
			<RecentMovies />
			<div className='box' ref={boxRef2}></div>
			<SwiperWrapper />
		</main>
	);
}
