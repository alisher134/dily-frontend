import { TProtectUser } from '../service/auth';

export interface IUserState {
	id: string;
	isLoggedIn: boolean;
}

export const transformUserToState = (user: TProtectUser): IUserState | null => {
	return {
		...user,
		isLoggedIn: true
	};
};
