import axios from 'axios';
import { Van } from './types';

export async function getVans() {
	const resp = await axios.get('/api/vans');
	if (!resp.data.vans) throw new Error('Error fetching data');
	return resp.data.vans as Van[];
}
