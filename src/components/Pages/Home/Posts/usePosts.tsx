import { useQuery } from '@tanstack/react-query';
import { IPostItem } from '../../../../types/Post';
import { postService } from '../../../../services/postService';

const usePosts = () => {
	const {
		data: posts,
		isLoading: postsLoading,
		isError: postsError,
	} = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.getPosts(5),
	});

	return { posts: posts as IPostItem[], postsLoading, postsError };
};

export default usePosts;
