import { useVan } from '../../components/Host/VanLayout';
import { capitalize } from '../../utils';

const HostVanShow = () => {
	const van = useVan();

	if (!van) return <div>Fetching van data...</div>;

	return (
		<div className="flex flex-col gap-y-3 text-xs">
			<p>
				<span className="font-bold">Name:</span> {van.name}
			</p>
			<p>
				<span className="font-bold">Category:</span> {capitalize(van.type)}
			</p>
			<p>
				<span className="font-bold">Description:</span> {van.description}
			</p>
			<p>
				<span className="font-bold">Visibility:</span> public
			</p>
		</div>
	);
};

export default HostVanShow;
