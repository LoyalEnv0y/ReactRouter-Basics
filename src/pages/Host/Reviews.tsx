import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const Reviews = () => {
	return (
		<main className="mx-5 grow">
			<section className="mb-5 mt-7 flex items-end">
				<h2 className="mr-4 text-2xl font-bold leading-none">
					Your Reviews
				</h2>
				<p className="text-xs">
					Last
					<Link
						to="/"
						className="ml-1 font-semibold underline underline-offset-[3px]">
						30 days
					</Link>
				</p>
			</section>

			{/* TODO: Refactor both reviews and income sections so that they use real charts instead */}
			<section className="mb-2">
				<img src="../../../public/images/Reviews-Chart.png" alt="" />
			</section>

			<section>
				<div className="mb-5 flex flex-col gap-y-2 border-b border-gray-300 pb-5">
					<div>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
					</div>

					<div className="flex items-center gap-x-1 text-sm font-semibold">
						<p>Elliot</p>
						<p className="text-gray-400">December 1, 2022</p>
					</div>

					<div>
						<p className="text-sm leading-4 tracking-wide">
							The beach bum is such as awesome van! Such as
							comfortable trip. We had it for 2 weeks and there was
							not a single issue. Super clean when we picked it up and
							the host is very comfortable and understanding. Highly
							recommend!
						</p>
					</div>
				</div>

				<div className="mb-10 flex flex-col gap-y-2 border-b border-gray-300 pb-5">
					<div>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>""
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
						<StarIcon
							className="text-orange-500"
							sx={{ fontSize: '18px' }}
						/>
					</div>

					<div className="flex items-center gap-x-1 text-sm font-semibold">
						<p>Sandy</p>
						<p className="text-gray-400">November 23, 2022</p>
					</div>

					<div>
						<p className="text-sm leading-4 tracking-wide">
							This is our third time using the Modest Explorer for our
							travels and we love it! No complaints, absolutely
							perfect!
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Reviews;
