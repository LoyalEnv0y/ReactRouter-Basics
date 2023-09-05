import { useMemo } from 'react';
import Button from '../components/Button';
import classnames from 'classnames';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { Van } from '../types';
import { getVans } from '../api';
import VanCell from '../components/VanCell';

/*
	-------------------------------------- 🔖 --------------------------------------
	To modify and use search parameters i.e `url/cars?type=lux` React Router gives
	us the useSearchParams hook. This hook returns two values. First is parameters
	and the second is the setter for that parameter. 

	-------------------------------------- 🔍 --------------------------------------
	SearchParams given from the hook has some useful methods to update or read the
	search parameters such as set, get and delete. After changing the parameters,
	we need to call the setter function to rerender the component. To handle the
	situations where we need to give multiple values to a single parameter (like
	array), we can separate them with ','s i.e `url/cars?types=lux,simple` etc..
*/

export const loader = async (): Promise<Van[]> => {
	return await getVans();
};

const Vans = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const types = useMemo(() => {
		return searchParams.get('types')?.split(',') || [];
	}, [searchParams]);
	let vans = useLoaderData() as Van[];

	vans = types?.length
		? vans.filter((van) => types.includes(van.type))
		: vans;

	const updateParamsArray = (key: string, value: string) => {
		const keyArray = searchParams.get(key)?.split(',');
		if (!keyArray) {
			updateParams(key, value, false);
			return;
		}

		const idx = keyArray.indexOf(value);

		if (idx > -1) {
			keyArray.splice(idx, 1);
			if (keyArray.length < 1) {
				updateParams(key, null);
				return;
			}
		} else {
			keyArray.push(value);
		}

		searchParams.set(key, keyArray.join(','));
	};

	const updateParams = (key: string, value: string | null, isArray?: boolean) => {
		if (value === null) {
			searchParams.delete(key);
		} else if (!isArray) {
			searchParams.set(key, value);
		} else {
			updateParamsArray(key, value);
		}

		setSearchParams(searchParams);
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
						onClick={() => updateParams('types', 'simple', true)}
					>
						Simple
					</Button>
					<Button
						className={getClassesForButton('luxury')}
						onClick={() => updateParams('types', 'luxury', true)}
					>
						Luxury
					</Button>
					<Button
						className={getClassesForButton('rugged')}
						onClick={() => updateParams('types', 'rugged', true)}
					>
						Rugged
					</Button>
				</div>

				{searchParams.get('types') && (
					<button
						className="text-sm underline underline-offset-[3px]"
						onClick={() => updateParams('types', null)}
					>
						Clear Filters
					</button>
				)}
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
				{vans.map((van) => (
					<VanCell key={van.id} van={van} searchParams={searchParams} />
				))}
			</section>
		</main>
	);
};

export default Vans;
