import { useEffect, useState } from 'react';
import Button from '../components/Button';
import classnames from 'classnames';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { Van } from '../types';

const initialFilters = [
	{
		id: uuid(),
		name: 'simple',
		active: false,
	},
	{ id: uuid(), name: 'luxury', active: false },
	{
		id: uuid(),
		name: 'rugged',
		active: false,
	},
];

const Vans = () => {
	const [vans, setVans] = useState<Van[]>([]);
	const [filteredVans, setFilteredVans] = useState<Van[]>([]);
	const [filters, setFilters] = useState(initialFilters);

	// TODO: Do all the data fetching in a API file.
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

	useEffect(() => {
		const activeFilters = filters
			.filter((filter) => filter.active)
			.map((filter) => filter.name);
		console.log(activeFilters);

		if (activeFilters.length < 1) {
			setFilteredVans(vans);
			return;
		}

		setFilteredVans(vans.filter((van) => activeFilters.includes(van.type)));
	}, [filters, vans]);

	const updateActiveFilters = (id: string) => {
		setFilters(
			filters.map((filter) =>
				filter.id === id ? { ...filter, active: !filter.active } : filter
			)
		);
	};

	const clearFilters = () => {
		setFilters(filters.map((filter) => ({ ...filter, active: false })));
	};

	const capitalize = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1);
	};

	const constructFilterButtons = () => {
		const buttons = (
			<div className="flex flex-wrap justify-between">
				<div className="mb-1">
					{filters.map((filter) => {
						const finalClasses = classnames(
							'mr-3 last:mr-2 mb-1',
							`hover:${filter.name}`,
							{
								[`text-white bg-${filter.name}`]: filter.active,
							}
						);
						return (
							<Button
								className={finalClasses}
								key={filter.id}
								onClick={() => updateActiveFilters(filter.id)}>
								{capitalize(filter.name)}
							</Button>
						);
					})}
				</div>

				<button
					className="text-sm underline underline-offset-[3px]"
					onClick={clearFilters}>
					Clear Filters
				</button>
			</div>
		);

		return buttons;
	};

	return (
		<main className="grow px-5 self-stretch">
			<section>
				<h1 className="mb-3 text-2xl font-bold">
					Explore our van options
				</h1>
				{constructFilterButtons()}
			</section>

			<section className="my-8 flex flex-wrap justify-between">
				{filteredVans.map((van) => {
					return (
						<Link
							to={`/vans/${van.id}`}
							className="mb-6 w-[47%] min-w-[110px]">
							<img
								src={van.imageUrl}
								alt="van photo"
								className="aspect-square rounded"
							/>

							<div className="flex justify-between">
								<div className="flex h-24 w-3/4 flex-col justify-between">
									<h1 className="mb-1 text-lg font-semibold">
										{van.name}
									</h1>

									<Button
										color={van.type}
										corner="roundedMD"
										disabled
										className="w-24">
										{capitalize(van.type)}
									</Button>
								</div>

								<div className="w-1/4 text-right">
									<p className="-mb-1 text-lg font-semibold">
										${van.price}
									</p>
									<span className="block text-xs">/day</span>
								</div>
							</div>
						</Link>
					);
				})}
			</section>
		</main>
	);
};

export default Vans;
