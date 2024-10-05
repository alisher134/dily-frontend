'use client';

import { SITE_CREATOR, SITE_CREATOR_LINK } from '@/shared/constants';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p>
					{`© ${year}. Make with ❤️ by `}
					<Link
						href={SITE_CREATOR_LINK}
						target='_blank'
						className={styles.link}
					>
						{SITE_CREATOR}
					</Link>
				</p>
			</div>
		</footer>
	);
};
