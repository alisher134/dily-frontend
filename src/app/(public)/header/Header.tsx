'use client';

import cn from 'clsx';
import { FC, useState } from 'react';
import { Cart } from './cart/Cart';
import styles from './Header.module.scss';
import { Menu } from './menu/Menu';
import { Search } from './search/Search';
import { UserMenu } from './user-menu/UserMenu';
import { Logo } from '@/components/ui';

export const Header: FC = () => {
	const [active, setActive] = useState(false);

	return (
		<header
			className={cn(styles.header, {
				[styles.active]: active
			})}
		>
			<div className={styles.container}>
				<div className={styles.left}>
					<Logo />
					<Menu />
				</div>
				<Search />

				<div className={styles.right}>
					<Cart />
					<UserMenu />
				</div>
			</div>
		</header>
	);
};
