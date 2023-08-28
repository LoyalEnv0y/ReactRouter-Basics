import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';
import classnames from 'classnames';
import { v4 as uuid } from 'uuid';

type Van = {
	id: string;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	type: 'rugged' | 'simple' | 'luxury';
};

const initialFilters = [
	{
		id: uuid(),
		name: 'simple',
		active: false,
		color: 'bg-orange-500',
	},
	{ id: uuid(), name: 'luxury', active: false, color: 'bg-black' },
	{
		id: uuid(),
		name: 'rugged',
		active: false,
		color: 'bg-green-900',
	},
];

const Vans = () => {
	const [vans, setVans] = useState<Van[]>([]);
	const [filters, setFilters] = useState(initialFilters);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resp = await fetch('/api/vans', { method: 'GET' });
				if (!resp.ok) throw new Error(resp.statusText);

				const respJSON = await resp.json();
				setVans(respJSON.vans);
			} catch (err) {
				console.log('Error => ', err);
				return <div>There was an error</div>;
			}
		};

		fetchData();
	}, []);

	const updateActiveFilters = (id: string) => {
		setFilters(
			filters.map((filter) =>
				filter.id === id ? { ...filter, active: !filter.active } : filter
			)
		);
	};

	const constructFilterButtons = () => {
		const buttonBaseClasses =
			'px-5 py-1 font-normal text-sm font-inter tracking-wide bg-orange-200 hover:text-white first:ml-0 last:mr-4';

		const buttons = (
			<div className="flex flex-wrap justify-between">
				<div className="mb-2">
					{filters.map((filter) => {
						const finalClasses = classnames(
							buttonBaseClasses,
							`hover:${filter.color}`,
							{
								[`text-white ${filter.color}`]: filter.active,
							}
						);
						return (
							<Button
								classNames={finalClasses}
								key={filter.id}
								onClick={() => updateActiveFilters(filter.id)}>
								{filter.name}
							</Button>
						);
					})}
				</div>

				<button className="text-sm underline underline-offset-[3px]">
					Clear Filters
				</button>
			</div>
		);

		return buttons;
	};

	return (
		<div className="flex min-h-screen flex-col">
			<Header className="flex-none" />
			<main className="flex-1 bg-orange-50 px-5">
				<section>
					<h1 className=" mb-3 text-2xl font-bold">
						Explore our van options
					</h1>
					{constructFilterButtons()}
				</section>

				<section>
					

				</section>
			</main>
			<Footer className="flex-none" />
		</div>
	);
};

export default Vans;
