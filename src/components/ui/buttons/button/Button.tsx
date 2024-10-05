import cn from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
