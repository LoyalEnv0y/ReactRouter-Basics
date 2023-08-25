import { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

type color =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'dark';
type corners = 'cornered' | 'roundedMD' | 'roundedLG' | 'roundedXL' | 'pill';

const cornersMap = new Map([
	['cornered', 'rounded-none'],
	['roundedMD', 'rounded-md'],
	['roundedLG', 'rounded-lg'],
	['roundedXL', 'rounded-xl'],
	['pill', 'rounded-full'],
]);

interface ButtonProps {
	color?: color;
	corner?: corners;
	classNames?: string;
	children?: ReactNode;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	color,
	corner,
	classNames,
	children,
	onClick,
}) => {
	// TODO: Instead of writing [3px] for border here, add a 3px option in tailwind config.
	const classes = twMerge(
		classnames(
			'border-[3px] border-zinc-400 bg-white text-black px-3 py-1 font-semibold rounded shadow-md m-1',
			'hover:shadow-zinc-600',
			'active:scale-95',
			cornersMap.get(corner!),
			classNames,
			{
				'text-stone-100': color,
				'bg-sky-600 border-sky-500 hover:shadow-sky-900':
					color === 'primary',
				'bg-zinc-700 border-zinc-600 hover:shadow-zinc-600':
					color === 'secondary',
				'bg-orange-400 border-orange-600 hover:shadow-orange-900':
					color === 'tertiary',
				'bg-green-600 border-green-500 hover:shadow-green-900':
					color === 'success',
				'bg-yellow-400 text-zinc-800 border-yellow-500 hover:shadow-yellow-700':
					color === 'warning',
				'bg-red-600 border-red-500 hover:shadow-red-700':
					color === 'danger',
				'bg-neutral-900 border-neutral-800 hover:shadow-neutral-800':
					color === 'dark',
			}
		)
	);

	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
};

export default Button;
