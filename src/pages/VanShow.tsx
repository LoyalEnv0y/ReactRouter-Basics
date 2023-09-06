import { Link, useLoaderData, useLocation } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Van } from '../types';
import Button from '../components/Button';
import { capitalize } from '../utils';

/*
	-------------------------------------- 📍 --------------------------------------
	UseLocation is a React Router hook that holds valuable information such as
	pathname, search parameters, key, and state which can be sent with a Link
	component. 

	We can use the state property to send in the search parameters from the Van
	page so that when user clicks on a Van and goes to VanShow page, they can go 
	back to the same filters. To achieve this write the search params in the path
	of the link
*/

const VanShow = () => {
	const location = useLocation();
	const search: string = location.state?.search || '';
	const van = useLoaderData() as Van;

	if (!van) return <div className="grow">Fetching wan data</div>;

	return (
		<main className="grow px-5 py-3">
			<Link
				to={search && search != '?' ? `..${search}` : '..'}
				relative="path"
			>
				<KeyboardBackspaceIcon
					sx={{ fontSize: 15 }}
					className="inline text-gray-400"
				/>

				<p className="ml-2 inline text-xs underline underline-offset-[3px]">
					{search && search != '?'
						? `Back to ${search
								.slice(search.indexOf('=') + 1)
								.toUpperCase()
								.replace(/%2C/g, ', ')} vans`
						: 'Back to all vans'}
				</p>
			</Link>

			<section className="mb-10">
				<img src={van?.imageUrl} alt="van image" className="my-7" />

				<Button
					color={van.type}
					corner="roundedMD"
					disabled
					className="mb-3 px-4 text-sm"
				>
					{capitalize(van.type)}
				</Button>

				<h1 className="mb-2 text-2xl font-bold">{van.name}</h1>
				<h2 className="mb-2">
					<span className="text-lg font-bold">${van.price}</span>
					<span>/day</span>
				</h2>

				<p className="mb-4 tracking-tight">{van.description}</p>

				<Button color="primary" className="h-10 w-full">
					Rent This Van
				</Button>
			</section>
		</main>
	);
};

export default VanShow;
