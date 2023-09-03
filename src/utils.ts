import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const capitalize = (text: string): string => {
	return text[0].toUpperCase() + text.slice(1);
};

export const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
	const baseClasses = 'text-sm underline-offset-[2px] mr-5';

	return twMerge(
		classNames(baseClasses, { 'underline font-semibold': isActive })
	);
};
