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
	const isLoggedIn = false;

	if (!isLoggedIn) {
		/*
			The below code should only be `throw redirect('/login') or return redirect('/login')`
			but mirage.js has problems with body being empty. So as a workaround we need to manually
			add the body. You do not need to do this in normal servers.

			This comes with the type issue of reassigning the body. We can ignore this error for now.
		*/

		const response = redirect('/login?message=You must be logged in');
		response.body = true; 
		throw response;
	}

	return null;
}
