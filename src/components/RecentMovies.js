import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import { useRecoilState } from 'recoil';
import { scrollState } from '../recoil/atoms/scrollState';

const fetch = async () => {
	const token = process.env.REACT_APP_TOKEN;
	const options = {
		headers: {
			accept: 'application/json',
			Authorization: token,
		},
	};

	const result = await axios.get(
		'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
		options
	);
	try {
		if (result) {
			return result.data.results;
		}
	} catch (err) {
		console.log(err);
	}
};

export default function RecentMovies() {
	const [data, setData] = useState([]);
	const [modal, setModal] = useState(false);
	const [index, setIndex] = useState(0);
	const scrollRef = useRef();

	useEffect(() => {
		//순서대로(비동기 처리)
		fetch().then((res) => {
			const result = res.map((el) => {
				const { backdrop_path, original_title, overview, poster_path, id } = el;
				return { backdrop_path, original_title, overview, poster_path, id };
			});

			setData(result);
		});
	}, []);

	return (
		<>
			<section id='list' className='upcoming' ref={scrollRef}>
				<div className='text-wrap'>
					<h2>Upcoming Movies</h2>
					<ul>
						{data.length &&
							// eslint-disable-next-line array-callback-return
							data.map((el, i) => {
								if (i < 12)
									return (
										<li
											onClick={() => {
												setIndex(i);
												setModal(true);
											}}>
											<Link to='/'>
												<img
													src={
														'https://image.tmdb.org/t/p/original/' +
														el.poster_path
													}
													alt={el.original_title}
												/>
											</Link>
										</li>
									);
							})}
					</ul>
				</div>
			</section>
			{modal && <Popup setModal={setModal} id={data[index].id} />}
		</>
	);
}
