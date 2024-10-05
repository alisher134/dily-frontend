class ApiConfig {
	AUTH(url: string = ''): string {
		return `/auth${url ? '/' + url : ''}`;
	}

	USER(url: string = ''): string {
		return `/user${url ? '/' + url : ''}`;
	}
}

export const API_CONFIG = new ApiConfig();
