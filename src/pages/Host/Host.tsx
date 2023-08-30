import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import VanList from '../../components/Host/VanList';

const Host = () => {

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
						<Link to="income">Details</Link>
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
						<Link to="reviews">Details</Link>
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
					<VanList />
				</div>
			</section>
		</main>
	);
};

export default Host;
