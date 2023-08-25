import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Header';
// 500
const About = () => {
	return (
		<div className="h-screen flex flex-col sm:items-center">
			<Navbar className="flex-none" />
			<main className="flex-1 sm:w-[500px]">
				<img
					src="images/Night-Sky-Caravan.png"
					alt="banner"
					className="h-1/3"
				/>

				<section className="h-2/3 px-8 mx-auto flex flex-col justify-evenly bg-pink-50">
					<h1 className="font-bold text-2xl">
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

					<div className="bg-orange-300 p-8 rounded">
						<h2 className="font-bold text-xl">
							Your destination is waiting.
						</h2>

						<h2 className="font-bold text-xl mb-4">
							Your van is ready.
						</h2>
						<Button
							color="dark"
							corner="roundedLG"
							classNames="border-none px-3 py-2"
						>
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
