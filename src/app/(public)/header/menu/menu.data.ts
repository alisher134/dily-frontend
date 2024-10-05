import { PUBLIC_PAGES } from '@/shared/config';
import { IMenuItem } from './menu.interface';

export const headerMenu: IMenuItem[] = [
	{
		name: 'Главная',
		link: PUBLIC_PAGES.HOME()
	},
	{
		name: 'Каталог',
		link: PUBLIC_PAGES.CATALOG()
	},
	{
		name: 'Доставка и оплата',
		link: PUBLIC_PAGES.DELIVERY()
	},
	{
		name: 'Контакты',
		link: PUBLIC_PAGES.CONTACTS()
	}
];
