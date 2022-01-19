import Head from 'next/head';

import Header from './Header';

const Layout = ({ children, pagina, guitarra }) => {
	return (
		<div className='min-h-screen flex flex-col bg-gray-100'>
			<Head>
				<title>{pagina ? `SocialNetwork - ${pagina}` : 'SocialNetwork'}</title>
				<meta name='description' content='Sitio Web de venta de guitarras' />
			</Head>

			<Header />

			{children}
		</div>
	);
};

export default Layout;
