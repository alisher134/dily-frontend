import { Search } from 'lucide-react';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	searchTerm: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
	className,
	type = 'text',
	searchTerm,
	handleSearch,
	...rest
}) => {
	return (
		<div className={styles.wrapper}>
			<Search />
			<input
				type={type}
				value={searchTerm}
				onChange={handleSearch}
				className={styles.input}
				{...rest}
			/>

			<button className={styles.button}>Найти</button>
		</div>
	);
};
