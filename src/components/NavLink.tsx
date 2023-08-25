import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps {
	to: string;
	children: ReactNode;
	className?: string;
}

const NavLink: FC<NavLinkProps> = ({ to, children, className }) => {
	const classes = twMerge(
		classnames(
			'font-semibold text-xl hover:text-blue-500 hover:underline',
			className
		)
	);

	return (
		<Link to={to} className={classes}>
			{children}
		</Link>
	);
};

export default NavLink;
