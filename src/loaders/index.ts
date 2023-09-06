import { LoaderFunctionArgs } from 'react-router-dom';
import { getVanById, getVans } from '../api';
import { Van } from '../types';

export const getAllVansLoader = async (): Promise<Van[]> => {
	return await getVans();
};

export const getVanByIdLoader = async ({ params }: LoaderFunctionArgs) => {
	if (!params.id) throw new Error('Error: No Id Found for Van');
	return await getVanById(params.id);
};

export const getThreeVansLoader = async () => {
	const vans = ['1', '2', '3'].map((id) => getVanById(id));
	return await Promise.all(vans);
};
