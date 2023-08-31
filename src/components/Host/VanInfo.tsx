import { Van } from '../../types';
import { FC } from 'react';
import Button from '../Button';

interface VanInfoProps {
	van: Van;
}

const VanInfo: FC<VanInfoProps> = ({ van }) => {
	// TODO: Move capitalize function to utils file as well
	const capitalize = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1);
	};

	return (
		<div className="flex items-center gap-x-4">
			<div className="basis-6/12">
				<img src={van.imageUrl} className="rounded-sm" />
			</div>

			<div className="basis-7/12">
				<Button color={van.type} disabled className="px-3 text-xs mb-1">
					{capitalize(van.type)}
				</Button>

				<div>
					<h4 className="font-bold text-lg">{van.name}</h4>
					<p className="text-xs">
						<span className='font-bold text-sm'>${van.price}</span>/day
					</p>
				</div>
			</div>
		</div>
	);
};

export default VanInfo;
