import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/*
	-------------------------------------- 🔌 --------------------------------------
	Outlet does what the children does in react vanilla.
*/
const Layout = () => {
	return (
		<div className="flex min-h-screen flex-col sm:items-center">
			<Header />
				<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
