'use client';

import { SearchInput } from '@/components/inputs';
import { FC } from 'react';
import styles from './Search.module.scss';
import { useSearch } from './useSearch';

export const Search: FC = () => {
	const { searchTerm, handleSearch } = useSearch();
	return (
		<div className={styles.search}>
			<SearchInput
				placeholder='Я хочу купить'
				searchTerm={searchTerm}
				handleSearch={handleSearch}
			/>
		</div>
	);
};
