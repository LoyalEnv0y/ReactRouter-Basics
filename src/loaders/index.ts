import { LoaderFunctionArgs } from 'react-router-dom';
import { getHostVanById, getHostVans, getVanById, getVans } from '../api';
import { Van } from '../types';
import { requireAuth } from '../utils';

export const getAllVansLoader = async (): Promise<Van[]> => {
	return await getVans();
};

export const getVanByIdLoader = async ({ params }: LoaderFunctionArgs) => {
	if (!params.id) throw new Error('Error: No Id Found for Van');
	return await getVanById(params.id);
};

export const getHostVansLoader = async () => {
	await requireAuth();
	return await getHostVans();
};

export const getHostVanLoader = async ({ params }: LoaderFunctionArgs) => {
	if (!params.id) throw new Error('Error: No Id Found for Van');
	await requireAuth();
	return await getHostVanById(params.id);
};
