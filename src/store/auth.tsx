import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { IUser } from '../types/User';
import useNavigation from '../hooks/useNavigations';

const USER_KEY = ['user'];

export const useUser = () =>
	useQuery<IUser | null>({
		queryKey: USER_KEY,
		queryFn: () => null,
		staleTime: Infinity,
		gcTime: Infinity,
	});

export const useLogin = () => {
	const queryClient = useQueryClient();
	const nav = useNavigation();

	return useMutation({
		mutationFn: async (user: IUser): Promise<IUser> => {
			return user;
		},
		onSuccess: (user) => {
			queryClient.setQueryData(USER_KEY, user);
			nav.home.go();
		},
	});
};

export const useLogout = () => {
	const queryClient = useQueryClient();
	return () => queryClient.setQueryData(USER_KEY, null);
};
