import VanList from '../../components/Host/VanList';

const HostVans = () => {
	return (
		<main className="grow px-5">
			<h1 className="py-5 text-2xl font-bold">Your Listed Vans</h1>
			<VanList />
		</main>
	);
};

export default HostVans;
