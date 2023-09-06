import CopyrightIcon from '@mui/icons-material/Copyright';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
	const classes = twMerge(
		'w-full h-20 bg-neutral-800 text-gray-400 flex justify-evenly items-center',
		classnames(className)
	);

	const siteVersion = '0.4.18';
	return (
		<footer className={classes}>
			<section className="flex items-center gap-1">
				<span>
					<CopyrightIcon />
				</span>

				<p>2022 #VANLIFE</p>
			</section>

			<section>Version {siteVersion}</section>
		</footer>
	);
};

export default Footer;
