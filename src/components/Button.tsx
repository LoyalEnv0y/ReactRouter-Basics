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
	border?: boolean;
	classNames?: string;
	children?: ReactNode;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	color,
	corner,
	border,
	classNames,
	children,
	onClick,
}) => {
	// TODO: Instead of writing [3px] for border here, add a 3px option in tailwind config.
	const classes = twMerge(
		classnames(
			'bg-white text-black px-2 py-1 font-semibold rounded shadow-md m-1',
			'hover:shadow-zinc-600',
			'active:scale-95',
			cornersMap.get(corner!),
			classNames,
			{
				'text-stone-100': color,
				'bg-primary hover:shadow-sky-900': color === 'primary',
				'bg-secondary hover:shadow-zinc-600': color === 'secondary',
				'bg-tertiary hover:shadow-orange-900': color === 'tertiary',
				'bg-success hover:shadow-green-900': color === 'success',
				'bg-warning hover:shadow-yellow-700': color === 'warning',
				'bg-danger hover:shadow-red-700': color === 'danger',
				'bg-dark hover:shadow-neutral-800': color === 'dark',

				'border-[3px] border-zinc-400': border,
				'border-sky-500': border && color === 'primary',
				'border-zinc-600': border && color === 'secondary',
				'border-orange-600': border && color === 'tertiary',
				'border-green-500': border && color === 'success',
				'border-yellow-500': border && color === 'warning',
				'border-red-500': border && color === 'danger',
				'border-neutral-800': border && color === 'dark',
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
