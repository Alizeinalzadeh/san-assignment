import { Permission } from '../types/Permissions';
import { useUser } from '../store/auth';
import { routes } from '../configs/routes';
import { RouteName } from '../types/Navigation';

/**
 * Interface defining the result of the usePermissions hook
 */
interface UsePermissionsResult {
	hasPermission: (permission: Permission) => boolean;
	hasPermissions: (permissions: Permission[]) => boolean;
	canAccessRoute: (routeName: RouteName) => boolean;
}

export const usePermissions = (): UsePermissionsResult => {
	const { data: user } = useUser();

	const hasPermission = (permission: Permission): boolean => {
		if (!user) return false;
		return user.permissions.includes(permission);
	};

	const hasPermissions = (permissions: Permission[]): boolean => {
		if (!user) return false;
		if (!permissions || permissions.length === 0) return true;
		return permissions.every((perm) => user.permissions.includes(perm));
	};

	const canAccessRoute = (routeName: RouteName): boolean => {
		if (!user) return false;

		const route = routes.find((r) => r.name === routeName);
		if (!route) return false;

		if (!route.permissions || route.permissions.length === 0) return true;
		return hasPermissions(route.permissions);
	};

	return {
		hasPermission,
		hasPermissions,
		canAccessRoute,
	};
};

export default usePermissions;
