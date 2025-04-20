import React, { Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IRouteElementWrapperProps } from './IRouteElementWrapperProps';
import useRouteElementWrapper from './useRouteElementWrapper';

const RouteElementWrapper = ({ route }: IRouteElementWrapperProps) => {
	const { hasPermission, ready, isAuthenticated } = useRouteElementWrapper({ route });
	const location = useLocation();

	const stateTimestamp = location.state?.timestamp || '';
	const locationKey = `${location.pathname}:${stateTimestamp}`;

	if (!ready) return <div className='p-4'>Loading...</div>;

	if (!isAuthenticated && route.name !== 'login') {
		return (
			<Navigate
				to='/login'
				replace
			/>
		);
	}

	if (!hasPermission) {
		return (
			<Navigate
				to='/403'
				replace
			/>
		);
	}

	if (route.renderer.type === 'element') {
		const element = route.renderer.element as React.ReactElement;
		return React.cloneElement(element, { key: locationKey });
	}

	const LazyComponent = React.lazy(route.renderer.loader);

	return (
		<Suspense
			fallback={<div className='p-4'>Loading...</div>}
			key={locationKey}
		>
			<LazyComponent />
		</Suspense>
	);
};

export default RouteElementWrapper;
