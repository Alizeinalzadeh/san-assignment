import useComments from './useComments';
import Container from '../../../Layout/Container/Container';
const Comments = () => {
	const { comments, commentsLoading, commentsError } = useComments();

	return (
		<Container
			loading={commentsLoading}
			error={commentsError}
		>
			<h2 className='text-lg font-semibold'>Recent Comments</h2>
			<ul>
				{comments?.map((comment) => (
					<li
						key={comment.id}
						className='border-b border-gray-200 py-2 last-of-type:border-b-0'
					>
						<p>{comment.name}</p>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Comments;
