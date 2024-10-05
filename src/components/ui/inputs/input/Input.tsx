import cn from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error: FieldError | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', error, label, ...rest }, ref) => {
		return (
			<div className={cn(styles.wrapper, className)}>
				<label className={styles.label}>{label}</label>

				<input type={type} ref={ref} className={styles.input} {...rest} />

				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Input.displayName = 'Input';
