import { PUBLIC_PAGES } from '@/shared/config';
import { getServerAuth } from '@/shared/libs/get-server-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import styles from './layout.module.scss';

export default async function AdminLayout({
	children
}: PropsWithChildren<unknown>) {
	const user = await getServerAuth();

	if (user?.isLoggedIn) return redirect(PUBLIC_PAGES.HOME());

	return (
		<main className={styles.main}>
			<section>{children}</section>
		</main>
	);
}
