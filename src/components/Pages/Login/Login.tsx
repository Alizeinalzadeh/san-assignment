import { useLogin } from '../../../store/auth';
import Layout from '../../Layout/Layout/Layout';

const Login = () => {
	const login = useLogin();

	return (
		<Layout>
			<div className='h-screen w-full flex justify-center items-center flex-col gap-10'>
				<h1 className='text-xl font-semibold mb-4'>Login</h1>
				<div className='flex justify-center items-center gap-4'>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer'
						onClick={() =>
							login.mutate({
								name: 'John Doe',
								permissions: ['VIEW_POSTS', 'VIEW_COMMENTS'],
							})
						}
					>
						Login as John Doe
					</button>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer'
						onClick={() =>
							login.mutate({
								name: 'Super Admin',
								permissions: ['VIEW_POSTS', 'VIEW_COMMENTS', 'CREATE_POST', 'EDIT_POST', 'CREATE_POST'],
							})
						}
					>
						Login as Super Admin
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
