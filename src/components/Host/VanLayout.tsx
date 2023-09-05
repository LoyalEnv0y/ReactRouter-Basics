import {
	Link,
	NavLink,
	Outlet,
	useLoaderData,
	useOutletContext,
} from 'react-router-dom';
import VanInfo from './VanInfo';
import { Van } from '../../types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getNavLinkClasses } from '../../utils';

const VanLayout = () => {
	const van = useLoaderData() as Van;

	if (!van) return <div className="mx-5 grow">Loading Van Info</div>;

	return (
		<main className="mx-5 mt-7 grow">
			<section className="mb-5">
				<Link to=".." className="">
					<KeyboardBackspaceIcon
						sx={{ fontSize: 15 }}
						className="inline text-gray-400"
					/>
					<p className="ml-1 inline text-xs underline underline-offset-[3px]">
						Back to all vans
					</p>
				</Link>
			</section>

			<section className="flex flex-col gap-y-4 bg-white p-4">
				<VanInfo van={van} />

				<div>
					<NavLink to="" end className={getNavLinkClasses}>
						Details
					</NavLink>
					<NavLink to="pricing" className={getNavLinkClasses}>
						Pricing
					</NavLink>
					<NavLink to="photos" className={getNavLinkClasses}>
						Photos
					</NavLink>
				</div>

				<Outlet context={van satisfies Van} />
			</section>
		</main>
	);
};

export function useVan() {
	return useOutletContext<Van>();
}

export default VanLayout;
