import Head from 'next/head';

import Header from './Header';

const Layout = ({ children, pagina }) => {
	return (
		<div className='min-h-screen flex flex-col bg-gray-100'>
			<Head>
				<title>{pagina ? `SocialNetwork - ${pagina}` : 'SocialNetwork'}</title>
				<meta name='description' content='Sitio Web de venta de guitarras' />
			</Head>

			<Header />

			<div className='flex-1 flex'>{children}</div>
		</div>
	);
};

export default Layout;
