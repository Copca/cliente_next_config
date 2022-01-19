import Layout from '../components/Layout';
import FormCrearCuenta from '../components/FormCrearCuenta';

const CrearCuenta = () => {
	return (
		<Layout pagina='Crear Cuenta'>
			<div className='container flex-1 flex justify-center items-center'>
				<div className='rounded-md p-8 max-w-md w-full bg-white shadow-sm shadow-gray-600 '>
					<h3 className='text-2xl font-bold text-gray-700 text-center mb-4'>
						Crea una cuenta
					</h3>

					<FormCrearCuenta />
				</div>
			</div>
		</Layout>
	);
};

export default CrearCuenta;
