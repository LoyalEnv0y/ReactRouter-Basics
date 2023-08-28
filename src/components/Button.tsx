import { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

type color = 'primary' | 'secondary' | 'tertiary';
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
	disabled?: boolean;
	classNames?: string;
	children?: ReactNode;
	onClick?: () => void;
}
// TODO: Instead of getting onClick, find a way to replicate ...rest usage of JS with types. #ffe1bc
const Button: FC<ButtonProps> = ({
	color,
	corner,
	border,
	disabled,
	classNames,
	children,
	onClick,
}) => {
	const classes = twMerge(
		classnames(
			'bg-[#ffe1bc] text-black px-5 py-1 rounded',
			'active:scale-[97%]',
			cornersMap.get(corner!),
			classNames,
			{
				'text-white': color,
				'bg-primary': color === 'primary',
				'bg-secondary': color === 'secondary',
				'bg-tertiary': color === 'tertiary',

				'border-3 border-orange-200': border,
				'border-orange-300': border && color === 'primary',
				'border-green-700': border && color === 'secondary',
				'border-gray-400': border && color === 'tertiary',

				'active:scale-100 cursor-default': disabled,
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
