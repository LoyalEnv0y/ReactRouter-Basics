import { useVan } from '../../components/Host/VanLayout';

const HostVanShow = () => {
	const van = useVan();

	if (!van) return <div>Fetching van data...</div>;

	const capitalize = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1);
	};

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
