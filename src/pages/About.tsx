import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
	return (
		<div className="flex min-h-screen flex-col items-center bg-orange-50">
			<Header className="flex-none" />
			<main className="flex flex-1 flex-col sm:w-[500px]">
				<img
					src="images/Night-Sky-Caravan.png"
					alt="banner"
					className="sm:w-[500px]"
				/>

				<section className="flex grow flex-col justify-between px-8">
					<h1 className="my-4 text-2xl font-bold sm:text-3xl">
						Don't squeeze in a sedan when you could relax in a van.
					</h1>
					<p className="mb-4 text-sm font-medium sm:text-lg">
						Our mission is to enliven your road trip with the perfect
						travel van rental. Our vans are recertified before each trip
						to ensure your travel plans can go off without a hitch.
						(Hitch costs extra 😉)
					</p>
					<p className="mb-6 text-sm font-medium sm:text-lg">
						Our team is full of vanlife enthusiasts who know firsthand
						the magic of touring the world on 4 wheels.
					</p>

					<div className="mb-10 rounded bg-orange-300 p-8">
						<h2 className="text-xl font-bold">
							Your destination is waiting.
						</h2>

						<h2 className="mb-4 text-xl font-bold">
							Your van is ready.
						</h2>
						<Button
							color="dark"
							corner="roundedLG"
							classNames="px-3 py-2">
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
