'use client';

import cn from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { IMenuItem } from '../menu.interface';
import styles from './MenuItem.module.scss';

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname();

	return (
		<li
			className={cn(styles.item, {
				[styles.active]: pathname === item.link
			})}
		>
			<Link href={item.link} className={styles.link}>
				{item.name}
			</Link>
		</li>
	);
};
