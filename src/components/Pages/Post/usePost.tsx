import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../../store/auth';
import { postService } from '../../../services/postService';
import { useState } from 'react';

const usePost = () => {
	const { id } = useParams();
	const postId = parseInt(id || '0');
	const { data: user } = useUser();
	const navigate = useNavigate();
	const canEdit = user?.permissions.includes('EDIT_POST');
	const canViewComments = user?.permissions.includes('VIEW_COMMENTS');
	const canViewOverview = user?.permissions.includes('VIEW_POSTS');
	const [tab, setTab] = useState<'edit' | 'comments' | ''>('');

	const {
		data: post,
		isLoading: postLoading,
		isError: postError,
	} = useQuery({
		queryKey: ['post', postId],
		queryFn: () => postService.getPost(postId),
	});

	const handleTabChange = (tab: 'edit' | 'comments' | '') => {
		if (tab === '' && !canViewOverview) {
			alert('You do not have permission to view the overview');
			return;
		}
		if (tab === 'comments' && !canViewComments) {
			alert('You do not have permission to view comments');
			return;
		}
		if (tab === 'edit' && !canEdit) {
			alert('You do not have permission to edit this post');
			return;
		}
		setTab(tab);
		navigate(`/posts/${postId}?tab=${tab}`);
	};

	return { post, postLoading, postError, postId, tab, canEdit, handleTabChange };
};

export default usePost;
