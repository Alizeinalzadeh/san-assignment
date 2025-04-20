import Loading from '../../Share/Loading/Loading';
import { IContainerProps } from './IContainerProps';

const Container = ({ children, loading, error, flat = false }: IContainerProps) => {
	if (loading) return <Loading />;
	if (error) return <div>Something went wrong</div>;
	return (
		<div className={` ${flat ? 'bg-transparent p-4 shadow-none' : 'bg-white shadow-md rounded-lg p-4 mt-4'}`}>{children}</div>
	);
};

export default Container;
