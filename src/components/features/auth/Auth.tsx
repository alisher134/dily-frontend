'use client';

import { Input } from '@/components/ui/inputs';
import { validEmail } from '@/shared/libs';
import { FC } from 'react';
import { AuthButtons } from './auth-buttons/AuthButtons';
import { EnumAuthType } from './auth.interface';
import styles from './Auth.module.scss';
import { useAuth } from './useAuth';

export const Auth: FC = () => {
	const { registerInput, handleSubmit, errors, onSubmit, type } = useAuth();

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h2 className={styles.heading}>
					{type === EnumAuthType.LOGIN ? 'Вход' : 'Регистрация'}
				</h2>

				<Input
					{...registerInput('email', {
						required: 'Пожалуйста, введите ваш email',
						pattern: {
							value: validEmail,
							message: 'Введите корректный email адрес'
						}
					})}
					label='Email'
					error={errors.email}
					placeholder='Введите ваш email'
					className={styles.input}
				/>

				{type === EnumAuthType.REGISTER && (
					<Input
						{...registerInput('username', {
							required: 'Пожалуйста, введите ваш username',
							minLength: {
								value: 3,
								message: 'Username должен содержать минимум 3 символов'
							}
						})}
						label='Username'
						error={errors.username}
						placeholder='Введите ваш username'
						className={styles.input}
					/>
				)}

				<Input
					{...registerInput('password', {
						required: 'Пожалуйста, введите ваш password',
						minLength: {
							value: 8,
							message: 'Password должен содержать минимум 8 символов'
						}
					})}
					label='Password'
					error={errors.password}
					placeholder='Введите ваш password'
					type='password'
					className={styles.input}
				/>

				<AuthButtons type={type} />
			</form>
		</div>
	);
};
