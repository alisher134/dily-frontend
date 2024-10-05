export interface IUser {
	id: string;
	email: string;
	username: string;
	role: EnumUserRole;
}

export enum EnumUserRole {
	USER = 'USER',
	ADMIN = 'ADMIN'
}
