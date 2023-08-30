import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import { Van } from '../../types';

const Host = () => {
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

	if (vans.length < 3) return 'Loading Vans';

	return (
		<main className="grow">
			<section className="mt-7 h-56">
				<section className="flex h-4/6 items-center justify-between bg-[#ffead0] px-5">
					<div className="flex h-full flex-col justify-evenly">
						<h1 className="text-2xl font-bold">Welcome!</h1>

						<p className=" text-xs">
							Income last
							<Link
								to="/"
								className="ml-1 underline underline-offset-[3px]">
								30 days
							</Link>
						</p>

						<span className="text-4xl font-bold">$2,260</span>
					</div>

					<div className="text-xs font-semibold">
						<Link to="/">Details</Link>
					</div>
				</section>

				<section className="flex h-2/6 items-center justify-between bg-faded px-5">
					<div className="flex w-5/6 items-center">
						<h2 className="mr-3 text-lg font-bold">Review Score</h2>

						<div className="flex items-center self-end">
							<StarIcon
								className="text-orange-500"
								sx={{ fontSize: '18px' }}
							/>
							<span className="font-bold">5.0</span>/5
						</div>
					</div>

					<div className="text-xs font-semibold">
						<Link to="/">Details</Link>
					</div>
				</section>
			</section>

			<section className="mx-5 mb-10">
				<div className="my-4 flex items-center justify-between">
					<h3 className="text-lg font-semibold">Your Listed Vans</h3>
					<Link to="vans" className="text-xs font-semibold">
						View all
					</Link>
				</div>

				<div className="">
					{vans.map((van) => {
						return (
							<div
								key={van.id}
								className="flex items-center justify-between rounded bg-white p-4 my-2">
								<div className="flex items-center">
									<img
										src={van.imageUrl}
										alt=""
										className="mr-3 w-12 rounded"
									/>
									<div>
										<h4 className="font-semibold">
											{van.name}
										</h4>
										<p className="text-xs">${van.price}/day</p>
									</div>
								</div>

								<div className="text-xs font-semibold">
									<Link to="/">Edit</Link>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
};

export default Host;
