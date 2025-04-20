import { ICommentItem } from '../types/Comment';

// NOTE: Fallback to jsonplaceholder if API_BASE_URL is not set
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

export interface CommentPayload {
	postId: number;
	name: string;
	email: string;
	body: string;
}

export const commentService = {
	getComments: async (limit?: number): Promise<ICommentItem[]> => {
		const url = limit ? `${API_BASE_URL}/comments?_limit=${limit}` : `${API_BASE_URL}/comments`;
		const res = await fetch(url);
		if (!res.ok) throw new Error('Failed to fetch comments');
		return res.json();
	},

	getCommentsByPostId: async (postId: number): Promise<ICommentItem[]> => {
		const res = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
		if (!res.ok) throw new Error('Failed to fetch post comments');
		return res.json();
	},
};
