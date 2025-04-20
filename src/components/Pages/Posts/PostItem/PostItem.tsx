import { Link } from 'react-router-dom';
import usePostItem from './usePostItem';
import { IPostItemProps } from './IPostItemProps';

const PostItem = ({ post }: IPostItemProps) => {
	const { handleEdit, handleDelete, isDeleting } = usePostItem();
	return (
		<li
			key={post.id}
			className='bg-white shadow-md rounded-lg p-4 list-none'
		>
			<Link to={`/posts/${post.id}`}>
				<h2 className='text-lg font-semibold'>{post.title}</h2>
				<p className='mt-2 text-gray-600'>{post.body}</p>
			</Link>
			<div className='mt-4 flex space-x-4'>
				<button
					onClick={() => handleEdit(post.id)}
					className='text-blue-500 hover:underline cursor-pointer'
				>
					Edit
				</button>

				<button
					onClick={() => handleDelete(post.id)}
					className='text-red-500 hover:underline cursor-pointer'
					disabled={isDeleting}
				>
					{isDeleting ? 'Deleting...' : 'Delete'}
				</button>
			</div>
		</li>
	);
};

export default PostItem;
