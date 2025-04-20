import { routes } from '../configs/routes';
import { RouteNavigator } from '../routes/nav';

/**
 * Type for the names of all routes in the application
 */
export type RouteName = typeof routes[number]['name'];

/**
 * Type for the navigation object with all routes
 */
export type NavigationObject = {
  [K in RouteName]: RouteNavigator;
}; 