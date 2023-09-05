export type Van = {
	id: string;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	type: 'rugged' | 'simple' | 'luxury';
};

export type AppError = {
	message: string;
	status: number;
	statusText: string;
};
