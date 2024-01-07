import axios from 'axios';
import { useState, useEffect } from 'react';

const fetch = async (id) => {
	const token = process.env.REACT_APP_TOKEN;
	const options = {
		headers: {
			accept: 'application/json',
			Authorization: token,
		},
	};

	const result = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}/images`,
		options
	);
	try {
		if (result) {
			// console.log(result);
			return result.data.posters;
		}
	} catch (err) {
		console.log(err);
	}
};

export default function Photo({ data }) {
	const [posters, setPosters] = useState();
	useEffect(() => {
		if (data) {
			fetch(data.id).then((res) => {
				if (res) {
					setPosters(res);
				}
			});
		}
	}, [data]);
	console.log(posters);
	return (
		<div className='poster-popup'>
			<ul>
				{posters &&
					posters.map((el, idx) => {
						if (idx < 10)
							return (
								<li>
									<img
										src={'https://image.tmdb.org/t/p/original/' + el.file_path}
										alt={el.id}
									/>
								</li>
							);
					})}
			</ul>
		</div>
	);
}
