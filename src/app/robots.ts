import { ADMIN_PAGES, PUBLIC_PAGES } from '@/shared/config';
import { APP_URL } from '@/shared/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: 'Yandex',
				allow: PUBLIC_PAGES.HOME(),
				disallow: ADMIN_PAGES.HOME()
			},
			{
				userAgent: 'Googlebot',
				allow: PUBLIC_PAGES.HOME(),
				disallow: ADMIN_PAGES.HOME()
			},
			{
				userAgent: '*',
				allow: PUBLIC_PAGES.HOME(),
				disallow: ADMIN_PAGES.HOME()
			}
		],
		host: APP_URL
	};
}
