import Footer from './Footer';
import Header from './Header';
import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface MainProps {
	children?: ReactNode;
	className: string;
}

const Main: FC<MainProps> = ({ children, className }) => {
	const classes = twMerge(classNames('flex-1 bg-orange-50', className));

	return (
		<div className="flex min-h-screen flex-col items-center">
			<Header className="flex-none" />
			<main className={classes}>{children}</main>
			<Footer className="flex-none" />
		</div>
	);
};

export default Main;
