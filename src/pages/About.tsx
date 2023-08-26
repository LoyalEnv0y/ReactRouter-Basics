import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Header';

const About = () => {
	return (
		<div className="flex h-screen flex-col sm:items-center">
			<Navbar className="flex-none" />
			<main className="flex-1 sm:w-[500px]">
				<img
					src="images/Night-Sky-Caravan.png"
					alt="banner"
					className="h-1/3"
				/>

				<section className="mx-auto flex h-2/3 flex-col justify-evenly bg-pink-50 px-8">
					<h1 className="text-2xl font-bold">
						Don't squeeze in a sedan when you could relax in a van.
					</h1>
					<p className="text-sm font-medium">
						Our mission is to enliven your road trip with the perfect
						travel van rental. Our vans are recertified before each trip
						to ensure your travel plans can go off without a hitch.
						(Hitch costs extra 😉)
					</p>
					<p className="text-sm font-medium">
						Our team is full of vanlife enthusiasts who know firsthand
						the magic of touring the world on 4 wheels.
					</p>

					<div className="rounded bg-orange-300 p-8">
						<h2 className="text-xl font-bold">
							Your destination is waiting.
						</h2>

						<h2 className="mb-4 text-xl font-bold">
							Your van is ready.
						</h2>
						<Button
							color="dark"
							corner="roundedLG"
							classNames="border-none px-3 py-2">
							Explore our vans
						</Button>
					</div>
				</section>
			</main>
			<Footer className="flex-none" />
		</div>
	);
};

export default About;
