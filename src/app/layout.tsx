import {
	APP_URL,
	SITE_CREATOR,
	SITE_CREATOR_LINK,
	SITE_DESCRIPTION,
	SITE_EMAIL,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_TITLE
} from '@/shared/constants';
import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.scss';

const font = Fira_Mono({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700'],
	display: 'swap'
});

export const metadata: Metadata = {
	title: {
		absolute: SITE_TITLE,
		template: `%s - ${SITE_TITLE}`
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	applicationName: SITE_NAME,
	authors: {
		name: SITE_CREATOR,
		url: SITE_CREATOR_LINK
	},
	keywords: SITE_KEYWORDS,
	creator: SITE_CREATOR,
	publisher: SITE_CREATOR,
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-icons/apple-touch-icon-180x180.png',
		other: {
			rel: 'touch-icons',
			url: '/apple-icons/apple-touch-icon-180x180.png',
			sizes: '180x180',
			type: 'image/png'
		}
	},
	manifest: './manifest.ts',
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		type: 'website',
		emails: [SITE_EMAIL],
		siteName: SITE_NAME,
		locale: 'ru_RU',
		images: {
			url: new URL(APP_URL + '/apple-icons/apple-touch-icon-180x180.png'),
			width: 180,
			height: 180,
			alt: SITE_TITLE
		},
		url: APP_URL
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: {
			url: new URL(APP_URL + '/apple-icons/apple-touch-icon-180x180.png'),
			width: 180,
			height: 180,
			alt: SITE_TITLE
		}
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className={font.className}>
			<body>{children}</body>
		</html>
	);
}
