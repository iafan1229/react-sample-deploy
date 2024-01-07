import { useEffect, useState } from 'react';
import axios from 'axios';

const fetch = async (id) => {
	const token = process.env.REACT_APP_TOKEN;
	const options = {
		headers: {
			accept: 'application/json',
			Authorization: token,
		},
	};

	const result = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}`,
		options
	);
	try {
		if (result) {
			return result.data;
		}
	} catch (err) {
		console.log(err);
	}
};

export default function Popup({ setModal, id }) {
	const [data, setData] = useState({});
	useEffect(() => {
		if (!id) return;
		fetch(id).then((res) => {
			console.log(res);
			const {
				backdrop_path,
				homepage,
				original_title,
				overview,
				release_date,
				vote_average,
			} = res;
			setData({
				backdrop_path,
				homepage,
				original_title,
				overview,
				release_date,
				vote_average,
			});
		});
	}, [id]);
	return (
		<div className='popup-wrap'>
			<div className='popup'>
				<div className='header'>
					<h2>{data ? data.original_title : ''}</h2>
					<span onClick={() => setModal(false)}>
						<svg
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g
								id='SVGRepo_tracerCarrier'
								stroke-linecap='round'
								stroke-linejoin='round'></g>
							<g id='SVGRepo_iconCarrier'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z'
									fill='#1C274C'></path>{' '}
							</g>
						</svg>
					</span>
				</div>
				<div className='content'>
					{data && (
						<>
							<div className='detail'>
								{data.overview}
								<div className='tag'>
									<p>release_date: {data.release_date}</p>
									<p>homepage: {data.homepage}</p>
									<p>vote_average: {data.vote_average}</p>
								</div>
							</div>
							<div className='img'>
								<img
									src={
										'https://image.tmdb.org/t/p/original/' + data.backdrop_path
									}
									alt=''
								/>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}