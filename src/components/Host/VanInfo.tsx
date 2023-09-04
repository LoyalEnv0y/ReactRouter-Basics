import { Van } from '../../types';
import { FC } from 'react';
import Button from '../Button';
import { capitalize } from '../../utils';

interface VanInfoProps {
	van: Van;
}

const VanInfo: FC<VanInfoProps> = ({ van }) => {
	return (
		<div className="flex items-center gap-x-4">
			<div className="basis-6/12">
				<img src={van.imageUrl} className="rounded-sm" />
			</div>

			<div className="basis-7/12">
				<Button color={van.type} disabled className="mb-1 px-3 text-xs">
					{capitalize(van.type)}
				</Button>

				<div>
					<h4 className="text-lg font-bold">{van.name}</h4>
					<p className="text-xs">
						<span className="text-sm font-bold">${van.price}</span>/day
					</p>
				</div>
			</div>
		</div>
	);
};

export default VanInfo;
