import Link from 'next/link';

const FormLogin = () => {
	return (
		<form className='p-4'>
			<div>
				<label htmlFor='email' className='sr-only'>
					Email
				</label>
				<input
					type='text'
					id='email'
					name='email'
					className='appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
					placeholder='Email de usuario'
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
					Iniciar Sesión
					<svg
						className='w-6 h-6 ml-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
						/>
					</svg>
				</button>

				<div className='mt-8'>
					<Link href={'/crear-cuenta'}>
						<a className='font-bold'>Crea una cuenta</a>
					</Link>
				</div>
			</div>
		</form>
	);
};

export default FormLogin;
