import { useQuery } from '@tanstack/react-query';
import { ICommentItem } from '../../../../types/Comment';
import { commentService } from '../../../../services/commentService';

const useComments = () => {
	const {
		data: comments,
		isLoading: commentsLoading,
		isError: commentsError,
	} = useQuery({
		queryKey: ['comments'],
		queryFn: () => commentService.getComments(5),
	});

	return { comments: comments as ICommentItem[], commentsLoading, commentsError };
};

export default useComments;
