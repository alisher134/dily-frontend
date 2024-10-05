import { Auth } from '@/components/features';
import { NO_INDEX_PAGE } from '@/shared/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
};

export default function AuthPage() {
	return <Auth />;
}
