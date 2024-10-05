import { axiosBase } from '@/api/axios';
import {
	EnumAuthType,
	IFormData
} from '@/components/features/auth/auth.interface';
import { API_CONFIG } from '@/shared/config/api-url.config';
import { removeTokensFromStorage, saveTokensToStorage } from './auth.helper';
import { IAuthResponse } from './auth.interface';

class AuthService {
	async main(type: EnumAuthType, data: IFormData) {
		const response = await axiosBase.post<IAuthResponse>(
			API_CONFIG.AUTH(type),
			data
		);

		if (response.data.accessToken)
			saveTokensToStorage(response.data.accessToken);

		return response;
	}

	async getNewTokens() {
		const response = await axiosBase.post<IAuthResponse>(
			API_CONFIG.AUTH('new-tokens')
		);

		if (response.data.accessToken)
			saveTokensToStorage(response.data.accessToken);

		return response;
	}

	async getNewTokensByRefreshToken(refreshToken: string) {
		const response = await axiosBase.post<IAuthResponse>(
			API_CONFIG.AUTH('new-tokens'),
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			}
		);

		if (response.data.accessToken)
			saveTokensToStorage(response.data.accessToken);

		return response;
	}

	async logout() {
		await axiosBase.post(API_CONFIG.AUTH('logout'));
		removeTokensFromStorage();
	}
}

export const authService = new AuthService();
