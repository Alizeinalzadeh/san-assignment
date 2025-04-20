import usePost from './usePost';
import Layout from '../../Layout/Layout/Layout';
import Comments from './Comments/Comments';
import Edit from './Edit/Edit';
import Container from '../../Layout/Container/Container';
const Post = () => {
	const { post, postLoading, postError, tab, handleTabChange } = usePost();

	return (
		<Layout>
			<Container
				loading={postLoading}
				error={postError}
			>
				<div className='mt-6'>
					<nav className='space-x-4 h-11 flex items-center justify-center gap-6 border-b border-gray-200 mb-10'>
						<button
							onClick={() => handleTabChange('')}
							className={`text-blue-500 hover:underline ${tab === '' ? 'border-b-2 border-blue-500' : ''}`}
						>
							Overview
						</button>
						<button
							onClick={() => handleTabChange('edit')}
							className={`text-blue-500 hover:underline ${tab === 'edit' ? 'border-b-2 border-blue-500' : ''}`}
						>
							Edit Post
						</button>
						<button
							onClick={() => handleTabChange('comments')}
							className={`text-blue-500 hover:underline ${tab === 'comments' ? 'border-b-2 border-blue-500' : ''}`}
						>
							Post Comments
						</button>
					</nav>
				</div>
				{tab === '' && (
					<Container
						loading={postLoading}
						error={postError}
						flat
					>
						<h1 className='text-xl font-bold'>{post?.title}</h1>
						<p className='mt-4'>{post?.body}</p>
					</Container>
				)}
				{tab === 'edit' && <Edit post={post} />}
				{tab === 'comments' && <Comments />}
			</Container>
		</Layout>
	);
};

export default Post;
