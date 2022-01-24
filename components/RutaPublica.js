import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import authContext from '../context/auth/authContext';

const RutaPublica = ({ children }) => {
	const router = useRouter();

	const { token, cargando, autenticado, autenticarUsuario } = useContext(authContext);

	useEffect(() => {
		if (token && !autenticado) {
			autenticarUsuario();
		}

		if (token && autenticado) {
			router.push('/');
		}
	}, [autenticado, token]);

	return <>{children}</>;
};

export default RutaPublica;
