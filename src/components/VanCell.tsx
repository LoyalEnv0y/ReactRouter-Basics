import { Link } from 'react-router-dom';
import { Van } from '../types';
import { FC } from 'react';
import Button from './Button';
import { capitalize } from '../utils';

interface VanCellProps {
	van: Van;
	searchParams: URLSearchParams;
}

const VanCell: FC<VanCellProps> = ({ van, searchParams }) => {
	return (
		<Link
			to={van.id}
			className="mb-6 w-[47%] min-w-[110px]"
			key={van.id}
			state={{ search: `?${searchParams.toString()}` }}
		>
			<img
				src={van.imageUrl}
				alt="van photo"
				className="aspect-square rounded"
			/>

			<div className="flex justify-between">
				<div className="flex h-24 w-3/4 flex-col justify-between">
					<h1 className="mb-1 text-lg font-semibold">{van.name}</h1>

					<Button
						color={van.type}
						corner="roundedMD"
						disabled
						className="w-24"
					>
						{capitalize(van.type)}
					</Button>
				</div>

				<div className="w-1/4 text-right">
					<p className="-mb-1 text-lg font-semibold">${van.price}</p>
					<span className="block text-xs">/day</span>
				</div>
			</div>
		</Link>
	);
};

export default VanCell;
