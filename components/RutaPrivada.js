import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import authContext from '../context/auth/authContext';

const RutaPrivada = ({ children }) => {
	const router = useRouter();

	const { token, cargando, autenticado, autenticarUsuario } = useContext(authContext);

	useEffect(() => {
		if (token && cargando) {
			autenticarUsuario();
		}

		if (!autenticado && !token) {
			router.push('/login');
		}
	}, [autenticado, token, cargando]);

	if (!autenticado) return 'Cargando...';

	return <>{children}</>;
};

export default RutaPrivada;
