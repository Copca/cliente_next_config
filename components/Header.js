import Link from 'next/link';

const Header = () => {
	return (
		<div className='bg-sky-600 shadow-md shadow-gray-600 text-white py-4'>
			<div className='container flex justify-between items-center'>
				<Link href={'/'}>
					<h1 className='text-3xl cursor-pointer'>Logo</h1>
				</Link>

				<nav className='space-x-8'>
					<Link href={'/login'}>
						<a>Iniciar Sesión</a>
					</Link>
					<Link href={'/crear-cuenta'}>
						<a>Crear Cuenta</a>
					</Link>
					<Link href={'/perfil'}>
						<a>Perfil</a>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
