import { useEffect, useMemo, useState } from 'react';
import Button from '../components/Button';
import classnames from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { Van } from '../types';
import { capitalize } from '../utils';

const Vans = () => {
	const [vans, setVans] = useState<Van[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const types = useMemo(() => {
		return searchParams.get('types')?.split(',') || [];
	}, [searchParams]);

	// TODO: Do all the data fetching in a API file.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const resp = await fetch('/api/vans', { method: 'GET' });
				if (!resp.ok) throw new Error(resp.statusText);

				const respJSON = await resp.json();
				const filteredVans = types?.length
					? respJSON.vans.filter((van: Van) => types.includes(van.type))
					: respJSON.vans;

				setVans(filteredVans);
			} catch (err) {
				console.log('Error => ', err);
				return <div>There was an error</div>;
			}
		};

		fetchData();
	}, [types]);

	const updateActiveTypes = (typeName: string) => {
		const idx = types.indexOf(typeName);
		if (idx > -1) {
			types.splice(idx, 1);
			if (types.length < 1) {
				clearTypes();
				return;
			}
		} else {
			types.push(typeName);
		}

		searchParams.set('types', types.join(','));
		setSearchParams(searchParams);
	};

	const clearTypes = () => {
		setSearchParams({});
	};

	const getClassesForButton = (typeName: string): string => {
		return classnames('mr-3 last:mr-2 mb-1', `hover:${typeName}`, {
			[`text-white bg-${typeName}`]: types?.includes(typeName),
		});
	};

	const constructFilterButtons = () => {
		const buttons = (
			<div className="flex flex-wrap justify-between">
				<div className="mb-1">
					<Button
						className={getClassesForButton('simple')}
						onClick={() => updateActiveTypes('simple')}>
						Simple
					</Button>
					<Button
						className={getClassesForButton('luxury')}
						onClick={() => updateActiveTypes('luxury')}>
						Luxury
					</Button>
					<Button
						className={getClassesForButton('rugged')}
						onClick={() => updateActiveTypes('rugged')}>
						Rugged
					</Button>
				</div>

				<button
					className="text-sm underline underline-offset-[3px]"
					onClick={clearTypes}>
					Clear Filters
				</button>
			</div>
		);

		return buttons;
	};

	return (
		<main className="grow self-stretch px-5">
			<section>
				<h1 className="mb-3 text-2xl font-bold">Explore our van options</h1>
				{constructFilterButtons()}
			</section>

			<section className="my-8 flex flex-wrap justify-between">
				{vans.map((van) => {
					return (
						<Link
							to={`/vans/${van.id}`}
							className="mb-6 w-[47%] min-w-[110px]"
							key={van.id}>
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
