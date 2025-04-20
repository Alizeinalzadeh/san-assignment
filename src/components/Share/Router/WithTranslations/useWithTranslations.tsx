import { useState } from 'react';

import { useEffect } from 'react';
import { RouteConfig } from '../../../../types/Routes';

const useWithTranslations = (route: RouteConfig) => {
	const [isLoading, setIsLoading] = useState(!!route.translations);

	useEffect(() => {
		if (route.translations) {
			route
				.translations()
				.then(() => setIsLoading(false))
				.catch((error) => {
					console.error(`Error loading translations for route ${route.name}:`, error);
					setIsLoading(false);
				});
		}
	}, [route]);

	return { isLoading };
};

export default useWithTranslations;
