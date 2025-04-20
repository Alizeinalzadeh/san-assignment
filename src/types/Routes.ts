import { Permission } from './Permissions';

export type RouteRenderer =
	| { type: 'element'; element: React.ReactNode }
	| { type: 'lazy'; loader: () => Promise<{ default: React.ComponentType<object> }> };

export type RouteConfig = {
	name: string;
	path: string;
	renderer: RouteRenderer;
	permissions?: Permission[];
	translations?: () => Promise<unknown>;
};

export type RouteParams = Record<string, string | number>;

export interface RouteLocationState {
	timestamp?: number;
}
