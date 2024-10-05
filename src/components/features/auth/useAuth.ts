import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EnumAuthType, IFormData } from './auth.interface';

export function useAuth() {
	const [type, setType] = useState(EnumAuthType.REGISTER);
	const {
		register: registerInput,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormData>({
		mode: 'onChange'
	});

	const onSubmit: SubmitHandler<IFormData> = data => {};

	return { registerInput, handleSubmit, errors, onSubmit, type };
}
