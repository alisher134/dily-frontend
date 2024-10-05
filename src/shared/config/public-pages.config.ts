class PublicPages {
	HOME(): string {
		return '/';
	}

	AUTH(): string {
		return '/auth';
	}

	LOGIN(): string {
		return '/auth?type=login';
	}

	REGISTER(): string {
		return '/auth?type=register';
	}

	CATALOG(): string {
		return '/catalog';
	}

	CONTACTS(): string {
		return '/contacts';
	}

	DELIVERY(): string {
		return '/delivery';
	}

	PROFILE(): string {
		return '/profile';
	}
}

export const PUBLIC_PAGES = new PublicPages();
