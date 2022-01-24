import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import authContext from '../context/auth/authContext';

const Header = () => {
	const router = useRouter();

	const { autenticado, cerrarSesion } = useContext(authContext);

	return (
		<div className='bg-sky-600 shadow-md shadow-gray-600 text-white py-4'>
			<div className='container flex justify-between items-center'>
				<Link href={'/'}>
					<h1 className='text-3xl cursor-pointer'>Logo</h1>
				</Link>

				<nav className='space-x-8'>
					{!autenticado ? (
						<>
							<Link href={'/login'}>
								<a
									className={`${
										router.pathname === '/login' && 'activo'
									}`}
								>
									Iniciar Sesión
								</a>
							</Link>

							<Link href={'/crear-cuenta'}>
								<a
									className={`${
										router.pathname === '/crear-cuenta' && 'activo'
									}`}
								>
									Crear Cuenta
								</a>
							</Link>
						</>
					) : (
						<>
							<Link href={'/perfil'}>
								<a
									className={`${
										router.pathname === '/perfil' && 'activo'
									}`}
								>
									Perfil
								</a>
							</Link>

							<Link href={'/crear-post'}>
								<a
									className={`${
										router.pathname === '/crear-post' && 'activo'
									}`}
								>
									Publicar
								</a>
							</Link>

							<button onClick={cerrarSesion}>Cerrar Sesión</button>
						</>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Header;
