import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { IPostItem } from '../../../../types/Post';
import { postService } from '../../../../services/postService';
import useNavigation from '../../../../hooks/useNavigations';

const useEdit = (post?: IPostItem) => {
	const [title, setTitle] = useState(post?.title || '');
	const [body, setBody] = useState(post?.body || '');
	const [error, setError] = useState<string | null>(null);
	const nav = useNavigation();

	const mutation = useMutation({
		mutationFn: (postData: { id: number; title: string; body: string }) =>
			postService.updatePost(postData.id, postData),
		onSuccess: () => {
			alert('Post updated successfully');
			nav.posts.go();
		},
		onError: () => {
			setError('Failed to update post');
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title || !body) {
			setError('Title and body are required.');
			return;
		}
		if (!post?.id) {
			setError('Post not found');
			return;
		}
		setError(null);
		mutation.mutate({ id: post?.id, title, body });
	};
	return { title, body, error, handleSubmit, mutation, setTitle, setBody };
};

export default useEdit;
