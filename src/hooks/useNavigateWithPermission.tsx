import { useCallback } from 'react';
import useNavigation from './useNavigations';
import { Permission } from '../types/Permissions';
import { RouteParams } from '../types/Routes';
import { RouteName } from '../types/Navigation';

/**
 * Options for navigation
 */
interface NavigationOptions {
  specificPermissions?: Permission[];
  silent?: boolean;
  replace?: boolean;
}

/**
 * Custom hook that provides a function to navigate to a route with permission checking
 * 
 * @returns A function to navigate to routes with permission checking
 */
const useNavigateWithPermission = () => {
  const nav = useNavigation();
  
  /**
   * Navigate to a route with permission checking
   * 
   * @param routeName The name of the route to navigate to
   * @param params Optional route parameters
   * @param options Optional navigation options
   * @returns true if navigation succeeded, false otherwise
   */
  const navigateTo = useCallback(
    (routeName: RouteName, params?: RouteParams, options?: NavigationOptions): boolean => {
      const navigator = nav[routeName];
      if (!navigator) {
        console.error(`Route "${routeName}" not found in navigation object`);
        return false;
      }
      
      return navigator.go(params, options);
    },
    [nav]
  );
  
  return navigateTo;
};

export default useNavigateWithPermission; 