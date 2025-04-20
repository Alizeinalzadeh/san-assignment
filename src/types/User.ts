import { Permission } from './Permissions';

export interface IUser {
	name: string;
	permissions: Permission[];
}
