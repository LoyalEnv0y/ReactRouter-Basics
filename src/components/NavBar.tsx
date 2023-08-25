import NavLink from './NavLink';


const Navbar = () => {

	return (
		<nav className="w-full flex justify-between">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<NavLink to="/prices">Prices</NavLink>
		</nav>
	);
};

export default Navbar;
