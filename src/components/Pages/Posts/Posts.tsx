import usePosts from './usePosts';
import Layout from '../../Layout/Layout/Layout';
import PostItem from './PostItem/PostItem';
import Container from '../../Layout/Container/Container';
const Posts = () => {
	const { posts, isLoading, isError } = usePosts();

	return (
		<Layout>
			<h1 className='text-xl font-bold mb-6'>Posts</h1>
			<div className='space-y-4'>
				<Container
					loading={isLoading}
					error={isError}
					flat
				>
					<div className='flex flex-col gap-4'>
						{posts.map((post) => (
							<PostItem
								key={post.id}
								post={post}
							/>
						))}
					</div>
				</Container>
			</div>
		</Layout>
	);
};

export default Posts;
