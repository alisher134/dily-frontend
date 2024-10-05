import Cookies from 'js-cookie';
import { EnumTokens } from './auth.interface';

export const getAccessToken = () => {
	return Cookies.get(EnumTokens.ACCESS_TOKEN);
};

export const saveTokensToStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken);
};

export const removeTokensFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
