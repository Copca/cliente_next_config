import Image from 'next/image';

import RutaPrivada from '../components/RutaPrivada';

import Layout from '../components/Layout';
import Galeria from '../components/Galeria';

const Perfil = () => {
	return (
		<Layout pagina='Perfil'>
			<div className='container'>
				<div className='flex justify-between items-center mt-8 max-w-screen-md mx-auto border-b-[1px] border-b-gray-300 mb-8 pb-4'>
					<div className='relative w-40'>
						<Image
							src={
								'https://images.unsplash.com/photo-1439402702863-6434b61e6392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwd29tYW4lMjBiZWF0aWZ1bCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							}
							alt='imagen podcast'
							width={500}
							height={500}
							// layout='fill'
							objectFit='cover'
							// objectPosition='center'
							// placeholder='blur'
							className='rounded-full'
							alt='imagen de usuario'
						/>
					</div>

					<div className='text-center'>
						<h3 className='text-2xl font-bold mb-8'>Sharon A. Goss</h3>

						<div className='flex text-gray-500 text-sm space-x-8'>
							<p>30 Publicaciones</p>
							<p>30 Seguidores</p>
							<p>30 Seguidos</p>
						</div>
					</div>
				</div>

				<Galeria />
			</div>
		</Layout>
	);
};

Perfil.Ruta = RutaPrivada;

export default Perfil;
