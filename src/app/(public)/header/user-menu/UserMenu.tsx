'use client';

import { PUBLIC_PAGES } from '@/shared/config';
import { useProfile } from '@/shared/hooks/useProfile';
import { Loader, User2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from './UserMenu.module.scss';
import { UserPopup } from './user-popup/UserPopup';

export const UserMenu: FC = () => {
	const { user, isLoading } = useProfile();

	if (isLoading) return <Loader />;

	return (
		<div className={styles.user_menu}>
			{user.isLoggedIn ? (
				<UserPopup />
			) : (
				<Link href={PUBLIC_PAGES.LOGIN()} className={styles.link}>
					<User2 className={styles.icon} />
					<span>Вход/регистрация</span>
				</Link>
			)}
		</div>
	);
};
