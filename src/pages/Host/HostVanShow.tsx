import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Van } from '../../types';
import VanInfo from '../../components/Host/VanInfo';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const HostVanShow = () => {
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

	if (!van) return <div>Fetching van data...</div>;

	// TODO: Move the getNavLinkClasses to util functions file
	const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
		const baseClasses = 'text-sm underline-offset-[2px] mr-5';

		return twMerge(
			classNames(baseClasses, { 'underline font-semibold': isActive })
		);
	};

	const capitalize = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1);
	};

	return (
		<main className="mx-5 grow">
			<section>
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

			<section className="bg-white p-4">
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

				<div className='flex flex-col gap-y-2 text-xs'>
					<p>
						<span className='font-bold'>Name:</span> {van.name}
					</p>
					<p>
						<span className='font-bold'>Category:</span> {capitalize(van.type)}
					</p>
					<p>
						<span className='font-bold'>Description:</span> {van.description}
					</p>
					<p>
						<span className='font-bold'>Visibility:</span> public
					</p>
				</div>
			</section>
		</main>
	);
};

export default HostVanShow;
