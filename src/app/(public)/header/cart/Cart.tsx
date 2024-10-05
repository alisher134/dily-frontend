import { ShoppingCart } from 'lucide-react';
import { FC } from 'react';
import styles from './Cart.module.scss';

export const Cart: FC = () => {
	return (
		<div className={styles.cart}>
			<button className={styles.button}>
				<ShoppingCart className={styles.icon} />
			</button>
		</div>
	);
};
