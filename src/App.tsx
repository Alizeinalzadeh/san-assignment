import AppRoutes from './components/Share/Router/AppRoutes/AppRoutes';
import Header from './components/Layout/Header/Header';
import { useUser } from './store/auth';

export default function App() {
	const { data: user } = useUser();

	return (
		<>
			{user && <Header />}
			<AppRoutes />
		</>
	);
}
