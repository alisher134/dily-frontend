import { ADMIN_PAGES, PUBLIC_PAGES } from '@/shared/config';
import { useOutside } from '@/shared/hooks/useOutside';
import { useProfile } from '@/shared/hooks/useProfile';
import { authService } from '@/shared/service/auth';
import { EnumUserRole } from '@/shared/types/user.types';
import { useMutation } from '@tanstack/react-query';
import cn from 'clsx';
import { Heart, LogOut, Settings, User, User2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import styles from './UserPopup.module.scss';

export const UserPopup: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false);
	const { user } = useProfile();

	const { mutateAsync: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			setIsShow(false);
		}
	});

	const handleLogout = async () => {
		await logout();
	};

	return (
		<div className={styles.user_popup} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} className={styles.button}>
				<User2 className={styles.icon} />
			</button>

			{isShow && (
				<div className={styles.popup}>
					<div className={styles.arrow}></div>
					<Link href={PUBLIC_PAGES.PROFILE()} className={styles.item}>
						<User />
						Профиль
					</Link>
					<Link
						href={PUBLIC_PAGES.PROFILE('favorites')}
						className={styles.item}
					>
						<Heart />
						Избранное
					</Link>
					{user.role === EnumUserRole.ADMIN && (
						<Link href={ADMIN_PAGES.HOME()} className={styles.item}>
							<Settings />
							Админ панель
						</Link>
					)}
					<button
						onClick={handleLogout}
						className={cn(styles.item, styles.button)}
					>
						<LogOut />
						Выйти
					</button>
				</div>
			)}
		</div>
	);
};
