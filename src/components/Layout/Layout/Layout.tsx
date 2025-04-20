import { ILayoutProps } from './ILayoutProps';

const Layout = ({ children }: ILayoutProps) => {
	return <div className='max-w-6xl p-6 mx-auto'>{children}</div>;
};

export default Layout;
