import classNames from 'classnames';
import { redirect } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export const capitalize = (text: string): string => {
	return text[0].toUpperCase() + text.slice(1);
};

export const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
	const baseClasses = 'text-sm underline-offset-[2px] mr-5';

	return twMerge(
		classNames(baseClasses, { 'underline font-semibold': isActive })
	);
};

export async function requireAuth() {
	const isLoggedIn = true;

	if (!isLoggedIn) {
		/*
			The below code should only be `throw redirect('/login') or return redirect('/login')`
			but mirage.js has problems with body being empty. So as a workaround we need to manually
			add the body. You do not need to do this in normal servers.

			This comes with the type issue of reassigning the body. We can ignore this error for now.

			Edit (07.09.2023;12:15): It seems that reassigning the body causes an issue with netlify
			and it is preventing it from deploying. I will comment out the reassigning code. This
			breaks the production as it throws an error with no message but at least it can be 
			published now.
		*/

		const response = redirect('/login?message=You must be logged in');
		// response.body = true; 
		throw response;
	}

	return null;
}
