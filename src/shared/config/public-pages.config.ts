import { APP_URL } from '@/shared/constants';

class PublicPages {
	private root: string;

	constructor() {
		this.root = APP_URL;
	}

	HOME(): string {
		return this.root;
	}
}

export const PUBLIC_PAGES = new PublicPages();
