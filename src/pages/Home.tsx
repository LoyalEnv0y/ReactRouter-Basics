import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
	return (
		<div className="h-screen">
			<Header className="h-[13%]" />
			<main className='bg-[url("../../public/images/mountainBackground.png")] h-[77%] bg-cover bg-no-repeat bg-center flex justify-center items-center'>
				<div className=" h-1/2 flex flex-col items-center text-white px-10">
					<h1 className="text-5xl font-bold mb-8">
						You got travel plans, we got the travel vans.
					</h1>

					<p className="text-lg mb-16 self-start">
						Add adventure to your life by joining the #vanlife movement.
						<br />
						Rent the perfect van to make your perfect road trip.
					</p>

					<Button color="tertiary" classNames="border-none w-full h-12">
						Find Your Van
					</Button>
				</div>
			</main>
			<Footer className="h-[10%]" />
		</div>
	);
};

export default Home;
