import axios from 'axios';
import { LoginCredentials, Van } from '../types';

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

export const getHostVans = async (): Promise<Van> => {
	const resp = await axios.get('/api/host/vans');
	if (!resp.data.vans)
		throw {
			message: 'Failed to get vans data for the user',
			statusText: resp.statusText,
			status: resp.status,
		};

	return resp.data.vans;
};

export const getHostVanById = async (id: string): Promise<Van> => {
	const resp = await axios.get(`/api/host/vans/${id}`);
	if (!resp.data.vans)
		throw {
			message: 'Failed to get van data for the user',
			statusText: resp.statusText,
			status: resp.status,
		};

	return resp.data.vans;
};

export const loginUser = async (credentials: LoginCredentials) => {
	// const res = await axios.post('/api/login', {
	// 	body: JSON.stringify(credentials),
	// });
	// console.log(res);

	// if (!res.data)
	// 	throw {
	// 		message: res.data.message,
	// 		statusText: res.statusText,
	// 		status: res.status,
	// 	};

	// return res.data;

	const res = await fetch('/api/login', {
		method: 'post',
		body: JSON.stringify(credentials),
	});
	const data = await res.json();
	console.log('fetch data => ', data);

	if (!res.ok)
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};

	return data;
};
