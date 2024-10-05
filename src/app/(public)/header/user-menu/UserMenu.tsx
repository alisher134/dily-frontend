'use client';

import { PUBLIC_PAGES } from '@/shared/config';
import { useProfile } from '@/shared/hooks/useProfile';
import { Loader, User2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from './UserMenu.module.scss';

export const UserMenu: FC = () => {
	const { user, isLoading } = useProfile();

	return (
		<div className={styles.user_menu}>
			{isLoading ? (
				<Loader />
			) : user ? (
				<Link href={PUBLIC_PAGES.PROFILE()} className={styles.link}>
					<User2 className={styles.icon} />
					<span>Профиль</span>
				</Link>
			) : (
				<Link href={PUBLIC_PAGES.LOGIN()} className={styles.link}>
					<User2 className={styles.icon} />
					<span>Вход/регистрация</span>
				</Link>
			)}
		</div>
	);
};
