import axios from 'axios';
import { Van } from './types';

export const getVans = async (): Promise<Van[]> => {
	const resp = await axios.get('/api/vans');
	if (!resp.data.vans)
		throw {
			message: 'Failed to get vans data',
			statusText: resp.statusText,
			status: resp.status,
		};
	return resp.data.vans as Van[];
};

export const getVanById = async (id: string): Promise<Van> => {
	const resp = await axios.get(`/api/vans/${id}`);
	if (!resp.data.vans)
		throw {
			message: 'Failed to get van data',
			statusText: resp.statusText,
			status: resp.status,
		};
	return resp.data.vans;
};
