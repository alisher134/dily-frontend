import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_PAGES, PUBLIC_PAGES } from './shared/config';
import { authService, EnumTokens, ITokenInside } from './shared/service/auth';
import { EnumUserRole } from './shared/types/user.types';

export async function middleware(request: NextRequest) {
	const JWT_SECRET = process.env.JWT_SECRET;
	let accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

	const isAdminPage = request.url.includes(ADMIN_PAGES.HOME());

	if (!refreshToken) {
		request.cookies.delete(EnumTokens.ACCESS_TOKEN);
		return redirectToLogin(isAdminPage, request);
	}

	if (!accessToken) {
		try {
			const data = await authService.getNewTokensByRefreshToken(refreshToken);
			accessToken = data.data.accessToken;
		} catch (error) {
			request.cookies.delete(EnumTokens.ACCESS_TOKEN);
			return redirectToLogin(isAdminPage, request);
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(`${JWT_SECRET}`)
		);

		if (payload.role === EnumUserRole.ADMIN) return NextResponse.next();

		if (isAdminPage) return redirectToLogin(isAdminPage, request);

		return NextResponse.next();
	} catch (error) {
		if (
			error instanceof Error &&
			error.message.includes('exp claim timestamp check failed')
		) {
			return redirectToLogin(isAdminPage, request);
		}

		return redirectToLogin(isAdminPage, request);
	}
}

export const config = {
	matcher: ['/admin/:path*', '/profile/:path*']
};

const redirectToLogin = (isAdminPage: boolean, request: NextRequest) => {
	return NextResponse.redirect(
		new URL(isAdminPage ? '/404' : PUBLIC_PAGES.LOGIN(), request.url)
	);
};
