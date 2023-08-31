import { useVan } from '../../components/Host/VanLayout';

const HostVanPricing = () => {
	const van = useVan();
	return (
		<p className="tracking-wider">
			<span className="text-xl font-bold">${van.price}</span>/day
		</p>
	);
};

export default HostVanPricing;
