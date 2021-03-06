import RutaPrivada from '../components/RutaPrivada';

import Layout from '../components/Layout';
import Card from '../components/Card';

const Home = () => {
	return (
		<Layout>
			<div className='container py-4 mt-8'>
				<Card />
			</div>
		</Layout>
	);
};

Home.Ruta = RutaPrivada;

export default Home;
