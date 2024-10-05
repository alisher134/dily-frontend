import { axiosInstance } from '@/api/axios';
import { API_CONFIG } from '../config/api-url.config';
import { IUser } from '../types/user.types';

class UserService {
	async profile() {
		return await axiosInstance.get<IUser>(API_CONFIG.USER('profile'));
	}
}

export const userService = new UserService();
