import { useLogout, useUser } from './../../../store/auth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useNavigation from '../../../hooks/useNavigations';

const Header = () => {
	const { data: user } = useUser();
	const logout = useLogout();
	const nav = useNavigation();

	useEffect(() => {
		if (!user) {
			nav.login.go();
		}
	}, [user, nav.login]);

	if (!user) return null;

	return (
		<header className='flex items-center justify-between p-4 bg-gray-100'>
			<div className='flex items-center justify-between w-full max-w-6xl mx-auto'>
				<nav className='space-x-4'>
					<Link
						to={nav.home.get()}
						className='text-blue-600 hover:underline'
					>
						Home
					</Link>
					<Link
						to={nav.posts.get()}
						className='text-blue-600 hover:underline'
					>
						Posts
					</Link>
					<Link
						to={nav.createPost.get()}
						className='text-blue-600 hover:underline'
					>
						Create
					</Link>
				</nav>
				<div>
					<span className='mr-4'>{user.name}</span>
					<button
						onClick={logout}
						className='text-red-600 underline hover:opacity-80'
					>
						Logout
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
