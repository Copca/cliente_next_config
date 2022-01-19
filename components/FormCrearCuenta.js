import Link from 'next/link';

const FormCrearCuenta = () => {
	return (
		<div>
			<form className='p-4'>
				<div>
					<label htmlFor='nombre' className='sr-only'>
						Nombre
					</label>
					<input
						type='text'
						id='nombre'
						name='nombre'
						className='appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
						placeholder='Tu Nombre'
					/>
				</div>

				<div>
					<label htmlFor='email' className='sr-only'>
						Email
					</label>
					<input
						type='text'
						id='email'
						name='email'
						className='appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
						placeholder='Tu Email'
					/>
				</div>

				<div>
					<label htmlFor='password' className='sr-only'>
						Password
					</label>
					<input
						type='password'
						id='password'
						name='password'
						className='appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
						placeholder='Password'
					/>
				</div>

				<div>
					<button
						type='submit'
						className='w-full flex justify-center items-center py-2 px-4 mt-10 text-sm rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600'
					>
						Crear Cuenta
					</button>
				</div>

				<div className='mt-8'>
					<Link href={'/login'}>
						<a className='font-bold'>
							Ya tengo una cuenta, ir a iniciar sesión
						</a>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default FormCrearCuenta;
