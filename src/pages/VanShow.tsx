import { Link, useParams } from 'react-router-dom';
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

	const capitalize = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1);
	};

	return (
		<div className="px-5 py-3">
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
					className="mb-3 px-4 text-sm">
					{capitalize(van.type)}
				</Button>

				<h1 className="mb-2 text-2xl font-bold">{van.name}</h1>
				<h2 className="mb-2">
					<span className="text-lg font-bold">${van.price}</span>
					<span>/day</span>
				</h2>

				<p className="mb-4 tracking-tight">{van.description}</p>

				<Button color="primary" className="h-10 w-full">
					Rent This Van
				</Button>
			</section>
		</div>
	);
};

export default VanShow;
