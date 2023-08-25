import { FC } from 'react';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface NavbarProps {
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
	const classes = twMerge(
		classnames(
			'w-full h-28 flex justify-evenly items-center bg-orange-50',
			className
		)
	);

	return (
		<header className={classes}>
			<section className="w-1/2">
				<Link to="/">
					<img
						className="w-36"
						src="../../public/images/VanlifeLogo.png"
						alt="logo"
					/>
				</Link>
			</section>
			<nav className="flex justify-around w-1/3">
				<NavLink to="/about">About</NavLink>
				<NavLink to="/Vans">Vans</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
