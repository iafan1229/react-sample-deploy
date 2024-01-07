import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import Photo from './Photo';

const fetch = async () => {
	const token = process.env.REACT_APP_TOKEN;
	const options = {
		headers: {
			accept: 'application/json',
			Authorization: token,
		},
	};

	const result = await axios.get(
		'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
		options
	);
	try {
		if (result) {
			return result.data.results[0];
		}
	} catch (err) {
		console.log(err);
	}
};

export default function NowPlaying() {
	const [data, setData] = useState({});
	const [openPhoto, setopenPhoto] = useState(false);
	const scrollRef = useRef();

	useEffect(() => {
		//순서대로(비동기 처리)
		fetch().then((res) => {
			const { backdrop_path, original_title, overview, id } = res;
			setData({ backdrop_path, original_title, overview, id });
		});
	}, []);

	return (
		<>
			{openPhoto && data && <Photo data={data} />}
			{data && (
				<section id='chapter1' ref={scrollRef}>
					<div className='text'>
						<span>NOW_PLAYING</span>
						<div className='text-wrap now-playing'>
							<h2>{data.original_title}</h2>
							<p>{data.overview}</p>
						</div>
						<div className='btn-wrap'>
							<ul>
								<li>
									<button>Beginning</button>
								</li>
								<li className='on'>
									<button>Synopsis</button>
								</li>
								<li>
									<button onClick={() => setopenPhoto(true)}>Images</button>
								</li>
							</ul>
						</div>
					</div>
					<div className='img-wrap'>
						<span className='img'>
							<img
								src={
									'https://image.tmdb.org/t/p/original/' + data.backdrop_path
								}
								alt=''
							/>
						</span>
						<span className='polygon'></span>
					</div>
				</section>
			)}
		</>
	);
}
