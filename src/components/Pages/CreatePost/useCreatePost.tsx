import { useMutation } from '@tanstack/react-query';
import { useState, FormEvent } from 'react';
import useNavigation from '../../../hooks/useNavigations';
import { postService } from '../../../services/postService';
import { IPostFormData, IPostItem } from '../../../types/Post';

interface UseCreatePostResult {
	title: string;
	body: string;
	error: string | null;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	setTitle: (value: string) => void;
	setBody: (value: string) => void;
	mutation: ReturnType<typeof useMutation<IPostItem, Error, IPostFormData>>;
}

const useCreatePost = (): UseCreatePostResult => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [error, setError] = useState<string | null>(null);
	const nav = useNavigation();

	const mutation = useMutation({
		mutationFn: postService.createPost,
		onSuccess: () => {
			nav.posts.go();
		},
		onError: () => {
			setError('Failed to create post');
		},
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title || !body) {
			setError('Title and body are required.');
			return;
		}
		setError(null);
		mutation.mutate({ title, body });
	};

	return {
		title,
		body,
		error,
		handleSubmit,
		mutation,
		setTitle: (value: string) => setTitle(value),
		setBody: (value: string) => setBody(value),
	};
};

export default useCreatePost;
