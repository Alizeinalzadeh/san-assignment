import { useNavigate } from 'react-router-dom';
import { createNavigation } from '../utils/createNavigation';
import { useQueryClient } from '@tanstack/react-query';

const useNavigation = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	return createNavigation(navigate, queryClient);
};

export default useNavigation;
