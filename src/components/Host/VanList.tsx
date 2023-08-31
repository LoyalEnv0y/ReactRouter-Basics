import { useEffect, useState } from 'react';
import { Van } from '../../types';
import { Link } from 'react-router-dom';

const VanList = () => {
	const [vans, setVans] = useState<Van[]>([]);

	useEffect(() => {
		const fetchVans = async () => {
			try {
				const resp1 = await fetch(`/api/vans/1`);
				const resp2 = await fetch(`/api/vans/2`);
				const resp3 = await fetch(`/api/vans/3`);
				if (!resp1.ok) throw new Error("Couldn't catch van");
				if (!resp2.ok) throw new Error("Couldn't catch van");
				if (!resp3.ok) throw new Error("Couldn't catch van");

				const respJson1 = await resp1.json();
				const respJson2 = await resp2.json();
				const respJson3 = await resp3.json();
				setVans([...vans, respJson1.vans, respJson2.vans, respJson3.vans]);
			} catch (err) {
				console.log(err);
			}
		};

		fetchVans();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (vans.length < 3) return <div className="grow">Loading Vans</div>;

	return (
		<div>
			{vans.map((van) => {
				return (
					<div
						key={van.id}
						className="my-2 flex items-center justify-between rounded bg-white p-4">
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
