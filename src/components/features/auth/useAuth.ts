import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
		formState: { errors }
	} = useForm<IFormData>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IFormData> = data => {};

	return { registerInput, handleSubmit, errors, onSubmit, type, setType };
}
