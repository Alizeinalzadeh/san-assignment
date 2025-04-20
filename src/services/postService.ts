import { IPostItem } from '../types/Post';

// NOTE: Fallback to jsonplaceholder if API_BASE_URL is not set
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

export interface PostPayload {
	title: string;
	body: string;
	userId?: number;
}

export const postService = {
	getPosts: async (limit?: number): Promise<IPostItem[]> => {
		const url = limit ? `${API_BASE_URL}/posts?_limit=${limit}` : `${API_BASE_URL}/posts`;
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch posts');
		return res.json();
	},

	getPost: async (id: number): Promise<IPostItem> => {
		const res = await fetch(`${API_BASE_URL}/posts/${id}`);
		if (!res.ok) throw new Error('Failed to fetch post');
		return res.json();
	},

	createPost: async (postData: PostPayload): Promise<IPostItem> => {
		const res = await fetch(`${API_BASE_URL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...postData, userId: 1 }),
		});
		if (!res.ok) throw new Error('Failed to create post');
		return res.json();
	},

	updatePost: async (id: number, postData: PostPayload): Promise<IPostItem> => {
		const res = await fetch(`${API_BASE_URL}/posts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...postData, userId: 1 }),
		});
		if (!res.ok) throw new Error('Failed to edit post');
		return res.json();
	},

	deletePost: async (id: number): Promise<void> => {
		const res = await fetch(`${API_BASE_URL}/posts/${id}`, {
			method: 'DELETE',
		});
		if (!res.ok) throw new Error('Failed to delete post');
		return res.json();
	},
};
