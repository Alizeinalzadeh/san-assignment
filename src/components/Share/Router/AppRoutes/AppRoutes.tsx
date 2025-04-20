import { Route, Routes } from 'react-router-dom';
import { routes } from '../../../../configs/routes';
import RouteElementWrapper from '../RouteElementWrapper/RouteElementWrapper';

const AppRoutes = () => {
	return (
		<Routes>
			{routes.map((route) => {
				return (
					<Route
						key={route.path}
						path={route.path}
						element={<RouteElementWrapper route={route} />}
					/>
				);
			})}
		</Routes>
	);
};

export default AppRoutes;
