import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
	return (
		<div className="h-screen flex flex-col">
			<Header className="flex-none" />
			<main className='bg-[url("images/Mountain-Background.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-1'>
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

					<div>
						<Button>Default</Button>
						<Button color="primary">Primary</Button>
						<Button color="secondary">Secondary</Button>
						<Button color="tertiary">Tertiary</Button>
						<Button color="success">Success</Button>
						<Button color="warning">Warning</Button>
						<Button color="danger">Danger</Button>
						<Button color="dark">Dark</Button>
						<br />
						<Button border>Default</Button>
						<Button color="primary" border={true}>
							Primary
						</Button>
						<Button color="secondary" border={true}>
							Secondary
						</Button>
						<Button color="tertiary" border={true}>
							Tertiary
						</Button>
						<Button color="success" border={true}>
							Success
						</Button>
						<Button color="warning" border={true}>
							Warning
						</Button>
						<Button color="danger" border={true}>
							Danger
						</Button>
						<Button color="dark" border={true}>
							Dark
						</Button>
					</div>
				</div>
			</main>
			<Footer className="flex-none" />
		</div>
	);
};

export default Home;
