import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const fetch = async () => {
	const token = process.env.REACT_APP_TOKEN;
	const options = {
		headers: {
			accept: 'application/json',
			Authorization: token,
		},
	};

	const result = await axios.get(
		'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
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

export default function Latest() {
	const navi = useNavigate();
	const [latest, setLatest] = useState({});

	useEffect(() => {
		//순서대로(비동기 처리)
		fetch().then((res) => {
			if (res) {
				setLatest(res);
			}
		});
	}, []);

	return (
		<>
			{Object.keys(latest).length && (
				<section
					id='latest'
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original/${latest.backdrop_path})`,
					}}>
					<div className='text-wrap'>
						<h2>{latest.original_title}</h2>
						<p>{latest.overview}</p>
						<button
							className='btn-gold'
							onClick={() =>
								navi('/detail', {
									state: latest,
								})
							}>
							<span>see more</span>
						</button>
					</div>
				</section>
			)}
		</>
	);
}
