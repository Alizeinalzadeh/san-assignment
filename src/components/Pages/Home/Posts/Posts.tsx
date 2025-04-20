import { Link } from 'react-router-dom';
import usePosts from './usePosts';
import useNavigation from '../../../../hooks/useNavigations';
import Container from '../../../Layout/Container/Container';

const Posts = () => {
	const { posts, postsLoading, postsError } = usePosts();
	const nav = useNavigation();

	return (
		<Container
			loading={postsLoading}
			error={postsError}
		>
			<h2 className='text-lg font-semibold'>Recent Posts</h2>
			<ul>
				{posts?.map((post: { id: number; title: string }) => (
					<li
						key={post.id}
						className='border-b border-gray-200 py-2 last-of-type:border-b-0'
					>
						<Link
							to={nav.post.get({ id: post.id })}
							className='text-blue-500 hover:underline'
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Posts;
