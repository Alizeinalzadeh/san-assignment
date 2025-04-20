import Layout from '../../../Layout/Layout/Layout';
import useComments from './useComments';
import { ICommentItem } from '../../../../types/Comment';
import Container from '../../../Layout/Container/Container';

const Comments = () => {
	const { comments, commentsLoading, commentsError, postId } = useComments();

	return (
		<Layout>
			<Container
				loading={commentsLoading}
				error={commentsError}
				flat
			>
				<div className='mt-4'>
					<h2 className='text-lg font-semibold'>Comments of post {postId}</h2>
					<ul>
						{comments?.map((comment: ICommentItem) => (
							<li
								key={comment.id}
								className='border-b py-2 last-of-type:border-b-0 border-gray-200'
							>
								<p>{comment.name}</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</Layout>
	);
};

export default Comments;
