import { APP_URL } from '@/shared/constants';

class AdminPages {
	private root: string;

	constructor() {
		this.root = `${APP_URL}/admin`;
	}

	HOME(): string {
		return this.root;
	}
}

export const ADMIN_PAGES = new AdminPages();
