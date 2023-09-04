import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/*
	-------------------------------------- 🔌 --------------------------------------
	Outlet does what the children does in react vanilla.
*/
const Layout = () => {
	return (
		<div className="flex min-h-screen w-full flex-col sm:max-w-[600px]">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
