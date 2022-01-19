import Layout from '../components/Layout';
import FormLogin from '../components/FormLogin';

const Login = () => {
	return (
		<Layout pagina='Inciar Sesión'>
			<div className='container flex-1 flex justify-center items-center'>
				<div className='rounded-md p-8 max-w-md w-full bg-white shadow-sm shadow-gray-600 '>
					<h3 className='text-2xl font-bold text-gray-700 text-center mb-4'>
						Iniciar Sesión
					</h3>

					<FormLogin />
				</div>
			</div>
		</Layout>
	);
};

export default Login;
