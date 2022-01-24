import { useContext } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import authContext from '../context/auth/authContext';

import Alerta from './Alerta';

const FormCrearCuenta = () => {
	const { registrarUsuario } = useContext(authContext);

	const formik = useFormik({
		initialValues: {
			nombre: '',
			email: '',
			password: '',
			confirmar: ''
		},
		validationSchema: Yup.object({
			nombre: Yup.string().required('El nombre es obligatorio').trim(),
			email: Yup.string()
				.required('El correo es obligatorio')
				.email('Ingresa una direccion valida'),
			password: Yup.string()
				.required('El password es obligatorio')
				.min(6, 'El password debe ser de al menos 6 caracteres'),
			confirmar: Yup.string()
				.required('Confirma tu password')
				.oneOf([Yup.ref('password'), null], 'Los passwords no coinciden')
		}),
		onSubmit: valores => {
			registrarUsuario(valores);
		}
	});

	return (
		<div>
			<form className='p-4' onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor='nombre' className='sr-only'>
						Nombre
					</label>
					<input
						type='text'
						id='nombre'
						className='appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
						placeholder='Tu Nombre'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.nombre && formik.touched.nombre && (
						<Alerta>{formik.errors.nombre}</Alerta>
					)}
				</div>

				<div>
					<label htmlFor='email' className='sr-only'>
						Email
					</label>
					<input
						type='text'
						id='email'
						className='appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
						placeholder='Tu Email'
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
					<label htmlFor='confirmar' className='sr-only'>
						Password
					</label>
					<input
						type='password'
						id='confirmar'
						className='appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-sky-500/50 focus:z-10 sm:text-sm'
						placeholder='Confirmar Password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.errors.confirmar && formik.touched.confirmar && (
						<Alerta>{formik.errors.confirmar}</Alerta>
					)}
				</div>

				<div>
					<button
						type='submit'
						className='btn bg-sky-600 hover:bg-sky-700 w-full mt-4'
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
