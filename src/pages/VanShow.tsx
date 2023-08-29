import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from 'react';
import { Van } from '../types';
import Button from '../components/Button';

const VanShow = () => {
	const { id } = useParams();
	const [van, setVan] = useState<Van>();

	useEffect(() => {
		const fetchVan = async () => {
			try {
				const resp = await fetch(`/api/vans/${id}`);
				if (!resp.ok) throw new Error('Fetching Van Failed');

				const respJSON = await resp.json();
				setVan(respJSON.vans);
			} catch (err) {
				console.log(err);
				return <div>err.statusMassage</div>;
			}
		};

		fetchVan();
	}, [id]);

	if (!van) return <div>Fetching wan data</div>;

	return (
		<div className="flex min-h-screen flex-col">
			<Header className="flex-none" />

			<main className="flex-1 bg-orange-50 px-5 py-3">
				<Link to={'/vans'} className="">
					<KeyboardBackspaceIcon
						sx={{ fontSize: 15 }}
						className="inline text-gray-400"
					/>
					<p className="ml-2 inline text-xs underline underline-offset-[3px]">
						Back to all vans
					</p>
				</Link>

				<section className="mb-10">
					<img src={van?.imageUrl} alt="van image" className="my-7" />

					<Button
						color={van.type}
						corner="roundedMD"
						disabled
						classNames="px-4 text-sm mb-3">
						{van.type.charAt(0).toUpperCase() + van.type.slice(1)}
					</Button>

					<h1 className="mb-2 text-2xl font-bold">{van.name}</h1>
					<h2 className="mb-2">
						<span className="text-lg font-bold">${van.price}</span>
						<span>/day</span>
					</h2>

					<p className="mb-4 tracking-tight">{van.description}</p>

					<Button color="primary" classNames="w-full h-10">
						Rent This Van
					</Button>
				</section>
			</main>

			<Footer className="flex-none" />
		</div>
	);
};

export default VanShow;
