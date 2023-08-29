import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
		color: 'primary',
	},
	{ id: uuid(), name: 'luxury', active: false, color: 'tertiary' },
	{
		id: uuid(),
		name: 'rugged',
		active: false,
		color: 'secondary',
	},
];

const Vans = () => {
	const [vans, setVans] = useState<Van[]>([]);
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

	const getColorOfType = (
		type: 'simple' | 'luxury' | 'rugged'
	): 'primary' | 'secondary' | 'tertiary' => {
		if (type === 'simple') return 'primary';
		if (type === 'rugged') return 'secondary';
		return 'tertiary';
	};

	const constructFilterButtons = () => {
		const buttons = (
			<div className="flex flex-wrap justify-between">
				<div className="mb-2">
					{filters.map((filter) => {
						const finalClasses = classnames(
							'mr-3 last:mr-2',
							`hover:${filter.color}`,
							{
								[`text-white bg-${filter.color}`]: filter.active,
							}
						);
						return (
							// TODO: Capitalize the type names
							<Button
								classNames={finalClasses}
								key={filter.id}
								onClick={() => updateActiveFilters(filter.id)}>
								{filter.name}
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

	// TODO: Show only the filtered vans
	return (
		// TODO: Create a Main file to reduce code duplication
		<div className="flex min-h-screen flex-col">
			<Header className="flex-none" />
			<main className="flex-1 bg-orange-50 px-5">
				<section>
					<h1 className=" mb-3 text-2xl font-bold">
						Explore our van options
					</h1>
					{constructFilterButtons()}
				</section>

				<section className="my-8 flex flex-wrap justify-between">
					{vans.map((van) => {
						return (
							<Link
								to={`/vans/${van.id}`}
								className="mb-6 w-[48%] max-w-[300px] sm:mr-3">
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

										{/* TODO: Create a Badge component */}
										<Button
											color={getColorOfType(van.type)}
											corner="roundedMD"
											disabled
											classNames="w-24">
											{van.type.charAt(0).toUpperCase() +
												van.type.slice(1)}
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
			<Footer className="flex-none" />
		</div>
	);
};

export default Vans;
