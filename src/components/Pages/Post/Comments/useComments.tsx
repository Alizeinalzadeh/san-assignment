import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { commentService } from '../../../../services/commentService';

const useComments = () => {
	const { id } = useParams();
	const postId = parseInt(id || '0');

	const {
		data: comments,
		isLoading: commentsLoading,
		isError: commentsError,
	} = useQuery({
		queryKey: ['comments', postId],
		queryFn: () => commentService.getCommentsByPostId(postId),
	});

	return { comments, commentsLoading, commentsError, postId };
};

export default useComments;
