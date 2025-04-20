import Home from '../components/Pages/Home/Home';
import Login from '../components/Pages/Login/Login';
import Forbidden from '../components/Pages/Forbidden/Forbidden';
import NotFound from '../components/Pages/NotFound/NotFound';
import { RouteConfig } from '../types/Routes';

export const routes: RouteConfig[] = [
	{
		name: 'login',
		path: '/login',
		renderer: { type: 'element', element: <Login /> },
	},
	{
		name: 'home',
		path: '/',
		renderer: { type: 'element', element: <Home /> },
		translations: () => Promise.resolve(),
	},
	{
		name: 'posts',
		path: '/posts',
		renderer: {
			type: 'lazy',
			loader: () => import('../components/Pages/Posts/Posts'),
		},
		permissions: ['VIEW_POSTS'],
		translations: () => Promise.resolve(),
	},
	{
		name: 'post',
		path: '/posts/:id',
		renderer: {
			type: 'lazy',
			loader: () => import('../components/Pages/Post/Post'),
		},
		permissions: ['VIEW_POSTS'],
		translations: () => Promise.resolve(),
	},
	{
		name: 'postComments',
		path: '/posts/:id/comments',
		renderer: {
			type: 'lazy',
			loader: () => import('../components/Pages/Post/Comments/Comments'),
		},
		permissions: ['VIEW_COMMENTS'],
		translations: () => Promise.resolve(),
	},
	{
		name: 'postEdit',
		path: '/posts/:id/edit',
		renderer: {
			type: 'lazy',
			loader: () =>
				import('../components/Pages/Post/Edit/Edit').then((module) => ({
					default: module.default as React.ComponentType<unknown>,
				})),
		},
		permissions: ['EDIT_POST'],
		translations: () => Promise.resolve(),
	},
	{
		name: 'createPost',
		path: '/create-post',
		renderer: {
			type: 'lazy',
			loader: () => import('../components/Pages/CreatePost/CreatePost'),
		},
		permissions: ['CREATE_POST'],
		translations: () => Promise.resolve(),
	},
	{
		name: 'forbidden',
		path: '/403',
		renderer: { type: 'element', element: <Forbidden /> },
		translations: () => Promise.resolve(),
	},
	{
		name: 'notFound',
		path: '*',
		renderer: { type: 'element', element: <NotFound /> },
		translations: () => Promise.resolve(),
	},
];
