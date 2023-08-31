import { useVan } from '../../components/Host/VanLayout';

const HostVanPhotos = () => {
	const van = useVan();

	return (
		<div className='w-20'>
			<img src={van.imageUrl} className='rounded' />
		</div>
	);
};

export default HostVanPhotos;
