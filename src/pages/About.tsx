import Footer from '../components/Footer';
import Navbar from '../components/Header';

const About = () => {
	return (
		<div className='h-screen flex flex-col'>
			<Navbar className='flex-none' />
			<main className='flex-1'>
				<img src="images/Night-Sky-Caravan.png" alt="banner" />
			</main>
			<Footer className='flex-none' />
		</div>
	);
};

export default About;
