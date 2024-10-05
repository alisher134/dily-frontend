import { PropsWithChildren } from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import styles from './layout.module.scss';

export default function PublicLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<main className={styles.main}>
			<Header />
			<section>{children}</section>
			<Footer />
		</main>
	);
}
