import { errorCatch } from '@/api/api.helpers';
import { PUBLIC_PAGES } from '@/shared/config';
import { authService } from '@/shared/service/auth';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { EnumAuthType, IFormData } from './auth.interface';

export function useAuth() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const type = (searchParams.get('type') ?? EnumAuthType.LOGIN) as EnumAuthType;

	const setType = (value: string) => {
		router.push(pathname + '?' + createQueryString('type', value));
	};

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);
			return params.toString();
		},
		[searchParams]
	);

	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormData>({
		mode: 'onChange'
	});

	const { mutateAsync: registerMutate } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IFormData) => authService.main(type, data),
		onSuccess() {
			toast.success('Регистрация прошла успешно!');
			router.push(PUBLIC_PAGES.HOME());
			reset();
		},
		onError(error) {
			toast.error(errorCatch(error));
		}
	});

	const { mutateAsync: loginMutate } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IFormData) => authService.main(type, data),
		onSuccess() {
			toast.success('Аутентификация прошла успешно!');
			router.push(PUBLIC_PAGES.HOME());
			reset();
		},
		onError(error) {
			toast.error(errorCatch(error));
		}
	});

	const onSubmit: SubmitHandler<IFormData> = data => {
		type === EnumAuthType.LOGIN ? loginMutate(data) : registerMutate(data);
	};

	return { registerInput, handleSubmit, errors, onSubmit, type, setType };
}
