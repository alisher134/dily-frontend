'use server';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { authService, EnumTokens, ITokenInside } from '../service/auth';
import { transformUserToState } from './transform-user-to-state';

export async function getServerAuth() {
	const JWT_SECRET = process.env.JWT_SECRET;
	let accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value;
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)?.value;

	if (!refreshToken) return null;

	if (!accessToken) {
		try {
			const { data } =
				await authService.getNewTokensByRefreshToken(refreshToken);
			accessToken = data.accessToken;
		} catch (error) {
			return null;
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(`${JWT_SECRET}`)
		);

		if (!payload) return null;

		return transformUserToState(payload);
	} catch (error) {
		return null;
	}
}
