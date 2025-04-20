import { useQuery } from '@tanstack/react-query';
import { IPostItem } from '../../../types/Post';
import { postService } from '../../../services/postService';

const usePosts = () => {
	const {
		data: posts,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.getPosts(),
	});

	return {
		posts: posts as IPostItem[],
		isLoading,
		isError,
	};
};

export default usePosts;
