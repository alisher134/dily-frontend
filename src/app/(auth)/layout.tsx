import { PropsWithChildren } from 'react';
import styles from './layout.module.scss';

export default function AdminLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.main}>
			<section>{children}</section>
		</main>
	);
}
