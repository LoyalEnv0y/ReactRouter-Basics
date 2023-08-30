import { Link } from 'react-router-dom';

const Income = () => {
	return (
		<main className="mx-5 grow">
			<section className="my-3 flex h-28 flex-col justify-between">
				<h1 className="text-2xl font-bold">Income</h1>
				<p className=" text-xs">
					Last
					<Link
						to="/"
						className="ml-1 font-semibold underline underline-offset-[3px]">
						30 days
					</Link>
				</p>

				<span className="text-4xl font-bold">$2,260</span>
			</section>

			<section className="my-6">
				<img
					src="/public/images/Income-Chart.png"
					alt=""
					className=""
				/>
			</section>

			<section className="mb-10">
				<div className="mt-4 mb-5 flex items-center justify-between">
					<h2 className="font-bold leading-none">
						Your Transactions (3)
					</h2>
					<p className="text-xs">
						Last
						<Link
							to="/"
							className="ml-1 font-semibold underline underline-offset-[3px]">
							30 days
						</Link>
					</p>
				</div>

				<div className="flex flex-col gap-y-5">
					<div className="radius flex items-center justify-between bg-white p-3">
						<span className="text-2xl font-semibold">$720</span>
						<p className="text-xs font-semibold">1/12/22</p>
					</div>

					<div className="radius flex items-center justify-between bg-white p-3">
						<span className="text-2xl font-semibold">$560</span>
						<p className="text-xs font-semibold">10/11/22</p>
					</div>

					<div className="radius flex items-center justify-between bg-white p-3">
						<span className="text-2xl font-semibold">$980</span>
						<p className="text-xs font-semibold">23/11/22</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Income;
