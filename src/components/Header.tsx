import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
	const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
		return `${navLinkClasses} ${isActive && 'underline'}`;
	};

	const navLinkClasses =
		'font-semibold text-xl hover:text-blue-500 hover:underline';

	return (
		<header className={classes}>
			<section className="w-1/2">
				<Link to="/">
					<img
						className="w-36"
						src="images/Vanlife-Logo.png"
						alt="logo"
					/>
				</Link>
			</section>
			<nav className="flex justify-around w-1/3">
				<NavLink to="/about" className={getNavLinkClasses}>
					About
				</NavLink>
				<NavLink to="/Vans" className={getNavLinkClasses}>
					Vans
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
