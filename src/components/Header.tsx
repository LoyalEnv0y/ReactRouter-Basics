import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { getNavLinkClasses } from '../utils';

interface HeaderProps {
	className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
	const classes = twMerge(
		classnames(
			'w-full px-2 h-28 flex justify-evenly items-center gap-x-10',
			className
		)
	);

	return (
		<header className={classes}>
			<section className="w-2/5">
				<Link to="/" className="flex">
					<img
						className="w-36"
						src="/images/Vanlife-Logo.png"
						alt="logo"
					/>
				</Link>
			</section>

			<nav className="flex w-3/5 justify-around">
				<NavLink to="/about" className={getNavLinkClasses}>
					About
				</NavLink>
				<NavLink to="/host" className={getNavLinkClasses}>
					Host
				</NavLink>
				<NavLink to="/vans" className={getNavLinkClasses}>
					Vans
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
