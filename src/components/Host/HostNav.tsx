import { NavLink, Outlet } from 'react-router-dom';
import { getNavLinkClasses } from '../../utils';

const HostNav = () => {
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
