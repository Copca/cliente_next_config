import { useContext } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import authContext from '../context/auth/authContext';

import Alerta from './Alerta';

const FormLogin = () => {
	const { iniciarSesion } = useContext(authContext);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required('El correo es obligatorio')
				.email('Ingresa una direccion valida'),
			password: Yup.string().required('El password es obligatorio')
		}),
		onSubmit: valores => {
			iniciarSesion(valores);
		}
	});

	return (
		<form className='p-4' onSubmit={formik.handleSubmit}>
			<div>
				<label htmlFor='email' className='sr-only'>
					Email
				</label>
				<input
					type='text'
					id='email'
					className='appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
					placeholder='Email de usuario'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>

				{formik.errors.email && formik.touched.email && (
					<Alerta>{formik.errors.email}</Alerta>
				)}
			</div>

			<div>
				<label htmlFor='password' className='sr-only'>
					Password
				</label>
				<input
					type='password'
					id='password'
					className='appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
					placeholder='Password'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>

				{formik.errors.password && formik.touched.password && (
					<Alerta>{formik.errors.password}</Alerta>
				)}
			</div>

			<div>
				<button
					type='submit'
					className='btn bg-sky-600 hover:bg-sky-700 w-full mt-4'
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
