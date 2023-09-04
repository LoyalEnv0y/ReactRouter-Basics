import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
	return (
		<main className="flex grow flex-col">
			<img src="/images/Night-Sky-Caravan.png" alt="banner" />

			<section className="flex grow flex-col justify-between px-8">
				<h1 className="my-4 text-2xl font-bold sm:text-3xl">
					Don't squeeze in a sedan when you could relax in a van.
				</h1>
				<p className="mb-4 text-sm font-medium sm:text-lg">
					Our mission is to enliven your road trip with the perfect travel
					van rental. Our vans are recertified before each trip to ensure
					your travel plans can go off without a hitch. (Hitch costs extra
					😉)
				</p>
				<p className="mb-6 text-sm font-medium sm:text-lg">
					Our team is full of vanlife enthusiasts who know firsthand the
					magic of touring the world on 4 wheels.
				</p>

				<div className="mb-10 rounded bg-orange-300 p-8">
					<h2 className="text-xl font-bold">
						Your destination is waiting.
					</h2>

					<h2 className="mb-4 text-xl font-bold">Your van is ready.</h2>

					<Link to="/vans">
						<Button
							color="luxury"
							corner="roundedLG"
							className="m-0 px-3 py-2">
							Explore our vans
						</Button>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default About;
