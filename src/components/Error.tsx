import { Link, useRouteError } from 'react-router-dom';
import Button from './Button';
import CachedIcon from '@mui/icons-material/Cached';
import HomeIcon from '@mui/icons-material/Home';
import { AppError } from '../types';

/*
	-------------------------------------- ❌ --------------------------------------
	Error information thrown from the api can be accessed by using the 
	`useRouteError` hook.
*/
const VansError = () => {
	const error = useRouteError() as AppError;

	return (
		<main className="flex grow flex-col justify-center gap-y-3 px-5">
			<h1 className="mb-5 text-3xl font-bold">Sorry, {error.message}</h1>
			<Link to="" onClick={() => location.reload()}>
				<Button
					color="primary"
					className="flex w-full items-center justify-center gap-x-1 py-3"
				>
					<CachedIcon /> Reload
				</Button>
			</Link>

			<Link to="/">
				<Button
					color="luxury"
					className="flex w-full items-center justify-center gap-x-1 py-3"
				>
					<HomeIcon /> Go to home
				</Button>
			</Link>
		</main>
	);
};

export default VansError;
