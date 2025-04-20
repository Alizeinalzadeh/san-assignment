import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../../../../services/postService';
import useNavigation from '../../../../hooks/useNavigations';

const usePostItem = () => {
	const queryClient = useQueryClient();
	const nav = useNavigation();
	// We no longer need to manually check permissions since the navigator will do that
	const canDelete = true; //since no permission defined in doc, we assume every user can delete

	const deleteMutation = useMutation({
		mutationFn: (id: number) => postService.deletePost(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['posts'] });
		},
	});

	const handleDelete = (id: number) => {
		if (!canDelete) {
			alert('You do not have permission to delete posts');
			return;
		}
		if (window.confirm('Are you sure you want to delete this post?')) {
			deleteMutation.mutate(id);
		}
	};

	const handleEdit = (id: number) => {
		// The permission check is now handled by the navigator
		nav.postEdit.go({ id });
	};

	return {
		handleDelete,
		handleEdit,
		isDeleting: deleteMutation.isPending,
	};
};

export default usePostItem;
