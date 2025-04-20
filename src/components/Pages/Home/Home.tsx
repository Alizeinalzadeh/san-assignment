import usePermissions from '../../../hooks/usePermissions';
import Layout from '../../Layout/Layout/Layout';
import Comments from './Comments/Comments';
import Posts from './Posts/Posts';

const Home = () => {
	const { hasPermission } = usePermissions();

	return (
		<Layout>
			<h1 className='text-xl font-bold mb-6'>Dashboard</h1>

			<div className='grid gap-6 mb-6 grid-cols-1 md:grid-cols-2'>
				{hasPermission('VIEW_POSTS') && <Posts />}
				{hasPermission('VIEW_COMMENTS') && <Comments />}
			</div>
		</Layout>
	);
};

export default Home;
