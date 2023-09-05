import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
	return (
		<main className="flex grow flex-col justify-center px-5">
			<h1 className="mb-7 text-3xl font-bold">
				Sorry, the page you were looking for was not found.
			</h1>
			<Link to="/">
				<Button color="luxury" className="w-full py-3">
					Return to home
				</Button>
			</Link>
		</main>
	);
};

export default NotFound;
