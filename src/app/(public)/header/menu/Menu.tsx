import { FC } from 'react';
import { MenuItem } from './menu-item/MenuItem';
import { headerMenu } from './menu.data';
export const Menu: FC = () => {
	return (
		<nav>
			<ul>
				{headerMenu.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	);
};
