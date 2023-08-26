import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
	return (
		<div className="flex h-screen flex-col">
			<Header className="flex-none" />
			<main className='flex flex-1 items-center justify-center bg-[url("images/Mountain-Background.png")] bg-cover bg-center bg-no-repeat'>
				<div className=" flex h-1/2 flex-col items-center px-10 text-white">
					<h1 className="mb-8 text-5xl font-bold">
						You got travel plans, we got the travel vans.
					</h1>

					<p className="mb-16 self-start text-lg">
						Add adventure to your life by joining the #vanlife movement.
						<br />
						Rent the perfect van to make your perfect road trip.
					</p>

					<Button color="tertiary" classNames="w-full h-12">
						Find Your Van
					</Button>
				</div>
			</main>
			<Footer className="flex-none" />
		</div>
	);
};

export default Home;
