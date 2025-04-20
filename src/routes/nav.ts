import { NavigateFunction } from 'react-router-dom';
import { RouteParams, RouteLocationState } from '../types/Routes';
import { routes } from '../configs/routes';
import { QueryClient } from '@tanstack/react-query';
import { IUser } from '../types/User';
import { Permission } from '../types/Permissions';

export class RouteNavigator {
	private path: string;
	private navigate: NavigateFunction;
	private routeName: string;
	private queryClient: QueryClient;

	constructor(path: string, navigate: NavigateFunction, routeName: string, queryClient: QueryClient) {
		this.path = path;
		this.navigate = navigate;
		this.routeName = routeName;
		this.queryClient = queryClient;
	}

	get(params?: RouteParams): string {
		if (!params) return this.path;

		return this.path.replace(/:(\w+)/g, (_, key) => {
			const value = params[key];
			if (value === undefined) {
				throw new Error(`Missing required parameter: ${key}`);
			}
			return String(value);
		});
	}

	checkPermissions(specificPermissions?: Permission[]): boolean {
		const route = routes.find((r) => r.name === this.routeName);
		if (!route) return false;

		const permissionsToCheck = specificPermissions || route.permissions;
		if (!permissionsToCheck || permissionsToCheck.length === 0) return true;

		const user = this.queryClient.getQueryData<IUser>(['user']);
		return !!user && permissionsToCheck.every((perm) => user.permissions.includes(perm));
	}

	go(
		params?: RouteParams,
		options?: {
			specificPermissions?: Permission[];
			silent?: boolean;
			replace?: boolean;
		},
	): boolean {
		const { specificPermissions, silent = false, replace = false } = options || {};

		const route = routes.find((r) => r.name === this.routeName);
		if (!route) {
			if (!silent) console.error(`Route ${this.routeName} not found`);
			return false;
		}

		if (!this.checkPermissions(specificPermissions)) {
			if (!silent) alert(`You don't have permission to access ${this.routeName}`);
			return false;
		}

		try {
			const path = this.get(params);
			this.navigate(path, {
				state: { timestamp: Date.now() } as RouteLocationState,
				replace,
			});
			return true;
		} catch (error) {
			if (!silent) {
				console.error(`Error navigating to ${this.routeName}:`, error);
				alert(`Error navigating to ${route.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
			}
			return false;
		}
	}
}

export class Navigation {
	private navigate: NavigateFunction;
	private queryClient: QueryClient;

	constructor(navigate: NavigateFunction, queryClient: QueryClient) {
		this.navigate = navigate;
		this.queryClient = queryClient;
	}

	createRouteNavigator(path: string, routeName: string): RouteNavigator {
		return new RouteNavigator(path, this.navigate, routeName, this.queryClient);
	}
}
