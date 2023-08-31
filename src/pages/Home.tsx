import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
	return (
		<main className='flex grow bg-[url("/images/Mountain-Background.png")] bg-cover bg-center bg-no-repeat'>
			<div className="my-auto flex justify-center">
				<div className="flex h-1/2 flex-col items-center px-10 text-white">
					<h1 className="mb-8 text-3xl font-bold sm:text-5xl">
						You got travel plans, we got the travel vans.
					</h1>
					<p className="text-md mb-16 self-start sm:text-lg">
						Add adventure to your life by joining the #vanlife movement.
						<br />
						Rent the perfect van to make your perfect road trip.
					</p>

					<Link to="/vans" className="w-full">
						<Button color="primary" className="h-12 w-full">
							Find Your Van
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Home;
