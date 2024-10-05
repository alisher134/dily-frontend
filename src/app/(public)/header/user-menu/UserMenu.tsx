import { PUBLIC_PAGES } from '@/shared/config';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from './UserMenu.module.scss';

export const UserMenu: FC = () => {
	return (
		<div className={styles.user_menu}>
			<Link href={PUBLIC_PAGES.LOGIN()} className={styles.link}>
				<User2 className={styles.icon} />
				<span>Вход/регистрация</span>
			</Link>
		</div>
	);
};
