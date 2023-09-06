import { Van } from '../../types';
import { Link, useLoaderData } from 'react-router-dom';

const VanList = () => {
	const vans = useLoaderData() as Van[];

	return (
		<div>
			{vans.map((van) => {
				return (
					<div
						key={van.id}
						className="my-2 flex items-center justify-between rounded bg-white p-4"
					>
						<div className="flex items-center">
							<img
								src={van.imageUrl}
								alt=""
								className="mr-3 w-12 rounded"
							/>
							<div>
								<h4 className="font-semibold">{van.name}</h4>
								<p className="text-xs">${van.price}/day</p>
							</div>
						</div>
						<div className="text-xs font-semibold">
							<Link to={`/host/vans/${van.id}`}>Edit</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default VanList;
