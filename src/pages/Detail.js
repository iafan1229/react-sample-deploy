import { useLocation } from 'react-router-dom';
export default function Detail() {
	const loca = useLocation();
	console.log(loca);
	return (
		<main>
			<section id='list' className='upcoming'>
				<div className='text-wrap'>
					<h2>Upcoming Movies</h2>
				</div>
			</section>
		</main>
	);
}
