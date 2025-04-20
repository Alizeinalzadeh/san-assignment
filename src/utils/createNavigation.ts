import { NavigateFunction } from 'react-router-dom';
import { routes } from '../configs/routes';
import { Navigation, RouteNavigator } from '../routes/nav';
import { QueryClient } from '@tanstack/react-query';
import { NavigationObject } from '../types/Navigation';

export const createNavigation = (navigate: NavigateFunction, queryClient: QueryClient): NavigationObject => {
	const nav = new Navigation(navigate, queryClient);
	const navigationObject: Record<string, RouteNavigator> = {};

	routes.forEach((route) => {
		if (route.name) {
			navigationObject[route.name] = nav.createRouteNavigator(route.path, route.name);
		}
	});

	return navigationObject as NavigationObject;
};
