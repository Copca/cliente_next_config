import RutaPrivada from '../components/RutaPrivada';

import Layout from '../components/Layout';
import FormCrearPost from '../components/FormCrearPost';

const CrearPost = () => {
	return (
		<Layout>
			<div className='container py-4 mt-8'>
				<FormCrearPost />
			</div>
		</Layout>
	);
};

CrearPost.Ruta = RutaPrivada;

export default CrearPost;
