import { useQuery } from '@tanstack/react-query';
import { transformUserToState } from '../libs/transform-user-to-state';
import { userService } from '../service/user.service';

export function useProfile() {
	const { data: profile, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
		select: ({ data }) => data,
		refetchInterval: 1800000
	});

	const userState = profile ? transformUserToState(profile) : null;

	return {
		isLoading,
		user: {
			...userState,
			...profile
		}
	};
}
