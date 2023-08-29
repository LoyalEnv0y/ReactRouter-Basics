import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col sm:items-center">
			<Header />

			<main className="grow bg-orange-50">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
