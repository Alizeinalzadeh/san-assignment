import { useState, useEffect } from 'react';
import { useUser } from '../../../../store/auth';
import { IRouteElementWrapperProps } from './IRouteElementWrapperProps';
import usePermissions from '../../../../hooks/usePermissions';

const useRouteElementWrapper = ({ route }: IRouteElementWrapperProps) => {
	const { data: user } = useUser();
	const { hasPermissions } = usePermissions();
	const [hasPermission, setHasPermission] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		setIsAuthenticated(!!user);
		setHasPermission(
			route.permissions ? hasPermissions(route.permissions) : true
		);
	}, [user, route.permissions, hasPermissions]);

	const [ready, setReady] = useState(false);

	useEffect(() => {
		(async () => {
			await route.translations?.();
			setReady(true);
		})();
	}, [route.translations]);

	return { hasPermission, ready, isAuthenticated };
};

export default useRouteElementWrapper;
