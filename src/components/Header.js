import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { scrollState } from '../recoil/atoms/scrollState';

export default function Header() {
	const [open, setOpen] = useState(false);
	const img = process.env.PUBLIC_URL;
	const [scroll] = useRecoilState(scrollState);
	const [index, setIndex] = useState();

	useEffect(() => {
		if (index < 3) {
			console.log(index);
			window.scrollTo({ top: scroll[index], behavior: 'smooth' });
			setOpen(false);
			setIndex();
		}
	}, [index]);

	return (
		<header>
			<div className='left'>
				<span>
					<Link to='/'>
						<img style={{ width: 300 }} alt='img' src={img + '/logo.png'} />
					</Link>
				</span>
				<div className='browse-wrap'>
					<button onClick={() => setOpen(!open)}>
						<b>Browse</b>
						<span></span>
					</button>
					{
						<ul className={`${open ? 'modal-slide-down' : ''} browse`}>
							{['Latest', 'Now Playing', 'Upcoming Movies'].map((el, idx) => (
								<li onClick={() => setIndex(idx)}>
									<span>{el}</span>
								</li>
							))}
						</ul>
					}
				</div>
			</div>

			<ul id='gnb'>
				{['search'].map((el) => {
					return (
						<li>
							<Link to='/'>
								<img src={img + '/' + el + '.svg'} alt='' />
							</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
}
