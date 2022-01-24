import { useReducer } from 'react';
import Swal from 'sweetalert2';

import clienteAxios from '../../config/clienteAxios';
import agregarToken from '../../config/agregarToken';

import authContext from './authContext';
import authReducer from './authReducer';

import {
	AUTH_REGISTRO_EXITOSO,
	AUTH_REGISTRO_ERROR,
	AUTH_LOGIN_EXITO,
	AUTH_LOGIN_ERROR,
	AUTH_AUTENTICADO_EXITO,
	AUTH_AUTENTICADO_ERROR,
	AUTH_CERRAR_SESION
} from '../../types';

const AuthState = props => {
	const initialState = {
		token: typeof window === 'undefined' ? null : localStorage.getItem('token'),
		autenticado: null,
		usuario: null,
		cargando: true
	};

	// Dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(authReducer, initialState);

	/**
	 * TRY: AUTH_LOGIN_EXITO.- guardar token en LS; llamar autenticarUauario(); state.autenticado->true; cargando->false
	 * CATCH:
	 */
	const registrarUsuario = async usuario => {
		try {
			const respuesta = await clienteAxios.post('/usuarios', usuario);

			dispatch({
				type: AUTH_REGISTRO_EXITOSO,
				payload: respuesta.data.token
			});

			// Obtener el usuario autenticado
			autenticarUsuario();

			Swal.fire('Correcto', respuesta.data.msg, 'success');
		} catch (error) {
			console.log(error);
			// console.log(error.response.data.errores);
			dispatch({
				type: AUTH_REGISTRO_ERROR
			});

			Swal.fire('Error', error.response.data.errores[0].msg, 'error');
		}
	};

	/**
	 * Obtiene el usuario autenticado
	 * state.cargando->false; state.autenticado->true; usuario->res.data
	 */
	const autenticarUsuario = async () => {
		const token = localStorage.getItem('token');

		if (!token) return;

		// Coloca el token en la cabecera del REQ
		agregarToken(token);

		try {
			const respuesta = await clienteAxios.get('/auth/login');
			console.log('Consultar API obtener usuario');
			console.log(respuesta.data);

			dispatch({
				type: AUTH_AUTENTICADO_EXITO,
				payload: respuesta.data
			});
		} catch (error) {
			console.log('error en autenticarUsuario');
			console.log(error.response.data);

			dispatch({
				type: AUTH_AUTENTICADO_ERROR
			});
		}
	};

	/**
	 * TRY: AUTH_LOGIN_EXITO.- guarda el token en LS; llama autenticarUsuario(); state.token->res.token; state.cargando->false
	 * ERROR: AUTH_LOGIN_ERROR.- state.cargando->false
	 */
	const iniciarSesion = async usuario => {
		try {
			const respuesta = await clienteAxios.post('/auth/login', usuario);

			dispatch({
				type: AUTH_LOGIN_EXITO,
				payload: respuesta.data.token
			});

			// Obtener el usuario autenticado
			autenticarUsuario();
		} catch (error) {
			dispatch({
				type: AUTH_LOGIN_ERROR
			});
			// console.log(error.response.data.msg);
			Swal.fire('Error', error.response.data.msg, 'error');
		}
	};

	/**
	 *  Borra token de LS; state.token->null; state.autenticado->null, state.usuario->null, state.cargando->true
	 */
	const cerrarSesion = () => {
		dispatch({
			type: AUTH_CERRAR_SESION
		});
	};

	return (
		<authContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				cargando: state.cargando,
				registrarUsuario,
				iniciarSesion,
				cerrarSesion,
				autenticarUsuario
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
