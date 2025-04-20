import { Navigate } from 'react-router-dom';
import React from 'react';
import WithTranslations from '../WithTranslations/WithTranslations';
import { IRenderRouteProps } from './IRenderRouteProps';

const RenderRoute = ({ route, location }: IRenderRouteProps) => {
	let element;

	if (route.renderer.type === 'element') {
		const reactElement = route.renderer.element as React.ReactElement;
		element = React.cloneElement(reactElement, { key: location });
	} else if (route.renderer.type === 'lazy') {
		const LazyComponent = React.lazy(route.renderer.loader);
		element = (
			<React.Suspense
				fallback={<div>Loading...</div>}
				key={location}
			>
				<LazyComponent />
			</React.Suspense>
		);
	} else {
		return <Navigate to='/403' />;
	}

	if (route.translations) {
		return <WithTranslations route={route}>{element}</WithTranslations>;
	}

	return element;
};

export default RenderRoute;
