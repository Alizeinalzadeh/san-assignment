import { IWithTranslationsProps } from './IWithTranslationsProps';
import useWithTranslations from './useWithTranslations';

const WithTranslations = ({ route, children }: IWithTranslationsProps) => {
	const { isLoading } = useWithTranslations(route);

	if (isLoading) {
		return <div>Loading translations...</div>;
	}

	return <>{children}</>;
};

export default WithTranslations;
