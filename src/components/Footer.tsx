import CopyrightIcon from '@mui/icons-material/Copyright';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { FC } from 'react';

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
	const classes = twMerge(
		'w-full bg-neutral-800 text-gray-400 flex justify-evenly items-center',
		classnames(className)
	);

	return (
		<footer className={classes}>
			<section className='flex items-center gap-1'>
				<span>
					<CopyrightIcon />
				</span>

				<p>2022 #VANLIFE</p>
			</section>
		</footer>
	);
};

export default Footer;
