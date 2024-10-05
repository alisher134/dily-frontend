import { Button } from '@/components/ui/buttons';
import { FC } from 'react';
import { EnumAuthType } from '../auth.interface';
import styles from './AuthButtons.module.scss';

interface AuthButtonsProps {
	type: string;
	setType: (value: string) => void;
}

export const AuthButtons: FC<AuthButtonsProps> = ({ type, setType }) => {
	return (
		<div className={styles.buttons}>
			<Button type='submit' className={styles.button}>
				{type === EnumAuthType.LOGIN ? 'Войти' : 'Зарегистрироваться'}
			</Button>

			{type === EnumAuthType.LOGIN ? (
				<p className={styles.toggle}>
					Нет аккаунта?
					<button type='button' onClick={() => setType(EnumAuthType.REGISTER)}>
						Регистрация
					</button>
				</p>
			) : (
				<p className={styles.toggle}>
					Уже есть аккаунт?
					<button type='button' onClick={() => setType(EnumAuthType.LOGIN)}>
						Войти
					</button>
				</p>
			)}
		</div>
	);
};
