import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const HostNav = () => {
	const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
		const baseClasses = 'text-sm underline-offset-[3px] mr-5';

		return twMerge(classNames(baseClasses, { 'underline': isActive }));
	};

	return (
		<>
			<div className="px-5">
				<NavLink to="" end className={getNavLinkClasses}>
					Dashboard
				</NavLink>
				<NavLink to="income" className={getNavLinkClasses}>
					Income
				</NavLink>
				<NavLink to="vans" className={getNavLinkClasses}>
					Vans
				</NavLink>
				<NavLink to="reviews" className={getNavLinkClasses}>
					Reviews
				</NavLink>
			</div>

			<Outlet />
		</>
	);
};

export default HostNav;
