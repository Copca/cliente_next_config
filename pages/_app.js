import '../styles/globals.css';

import AuthState from '../context/auth/authState';

import RutaPublica from '../components/RutaPublica';

function MyApp({ Component, pageProps }) {
	// Prop para proteger rutas privadas
	const Ruta = Component.Ruta || RutaPublica;

	return (
		<AuthState>
			<Ruta>
				<Component {...pageProps} />
			</Ruta>
		</AuthState>
	);
}

export default MyApp;
