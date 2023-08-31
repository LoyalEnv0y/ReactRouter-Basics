import { Link, NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom';
import VanInfo from './VanInfo';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Van } from '../../types';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const VanLayout = () => {
	const { id } = useParams();
	const [van, setVan] = useState<Van>();

	useEffect(() => {
		const fetchVan = async () => {
			try {
				const resp = await fetch(`/api/vans/${id}`);
				if (!resp.ok) throw new Error("Couldn't fetch van data");

				const respJson = await resp.json();
				setVan(respJson.vans);
			} catch (err) {
				console.log(err);
				return <div>Error while trying to get van data</div>;
			}
		};

		fetchVan();
	}, [id]);

	if (!van) return <div>Loading Van Info</div>;

	// TODO: Move the getNavLinkClasses to util functions file
	const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
		const baseClasses = 'text-sm underline-offset-[2px] mr-5';

		return twMerge(
			classNames(baseClasses, { 'underline font-semibold': isActive })
		);
	};

	return (
		<main className="mx-5 grow mt-7">
			<section className='mb-5'>
				<Link to={'/vans'} className="">
					<KeyboardBackspaceIcon
						sx={{ fontSize: 15 }}
						className="inline text-gray-400"
					/>
					<p className="ml-1 inline text-xs underline underline-offset-[3px]">
						Back to all vans
					</p>
				</Link>
			</section>

			<section className="bg-white p-4 flex flex-col gap-y-4">
				<VanInfo van={van} />

				<div>
					<NavLink to="" end className={getNavLinkClasses}>
						Details
					</NavLink>
					<NavLink to="income" className={getNavLinkClasses}>
						Pricing
					</NavLink>
					<NavLink to="vans" className={getNavLinkClasses}>
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
