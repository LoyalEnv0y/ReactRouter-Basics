import { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

type color = 'primary' | 'simple' | 'rugged' | 'luxury';
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
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
}
// TODO: Instead of getting onClick, find a way to replicate ...rest usage of JS with types. #ffe1bc
const Button: FC<ButtonProps> = ({
	color,
	corner,
	border,
	disabled,
	className,
	children,
	onClick,
}) => {
	const classes = twMerge(
		classnames(
			'bg-faded text-black px-5 py-1 rounded',
			'active:scale-97',
			cornersMap.get(corner!),
			{
				'text-white': color,
				'bg-primary': color === 'primary',
				'bg-simple': color === 'simple',
				'bg-rugged': color === 'rugged',
				'bg-luxury': color === 'luxury',
				
				'border-3 border-orange-200': border,
				'border-orange-300': border && color === 'primary',
				'border-orange-400': border && color === 'simple',
				'border-green-700': border && color === 'rugged',
				'border-gray-400': border && color === 'luxury',
				
				'active:scale-100 cursor-default': disabled,
			},
			className
		)
	);

	return (
		<button onClick={onClick} className={classes}>
			{children}
		</button>
	);
};

export default Button;
