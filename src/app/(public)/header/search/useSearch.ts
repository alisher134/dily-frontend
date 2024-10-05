import { ChangeEvent, useState } from 'react';

export function useSearch() {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return {
		searchTerm,
		handleSearch
	};
}
